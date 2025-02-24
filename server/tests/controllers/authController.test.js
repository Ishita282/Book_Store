const {
  signupUser,
  loginUser,
  //   logoutUser,
} = require("../../src/controller/authController");

const User = require("../../src/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

jest.mock("../../src/models/user.js");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");

describe("Auth Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("signupUser", () => {
    it("should signup a new user successfully", async () => {
      const req = {
        body: {
          name: "Test User",
          email: "test@example.com",
          password: "password123",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue(null);
      User.create.mockResolvedValue({
        id: "user123",
        name: req.body.name,
        email: req.body.email,
        password: "hashedPassword",
      });
      bcrypt.hash.mockResolvedValue("hashedPassword");
      jwt.sign.mockReturnValue("mockToken");

      await signupUser(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
      expect(User.create).toHaveBeenCalledWith({
        name: req.body.name,
        email: req.body.email,
        password: "hashedPassword",
      });

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: "User signuped successfully",
        user: { id: "user123", name: req.body.name, email: req.body.email },
        token: "mockToken",
      });
    });

    it("should return 409 if the email is already signuped", async () => {
      const req = { body: { email: "test@example.com" } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      User.findOne.mockResolvedValue({ email: "test@example.com" });

      await signupUser(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
      expect(res.status).toHaveBeenCalledWith(409);
      expect(res.json).toHaveBeenCalledWith({
        success: false,
        message: "User already exist with this email",
      });
    });
  });

  describe("loginUser", () => {
    it("should log in a user with valid credentials", async () => {
      const req = {
        body: { email: "test@example.com", password: "password123" },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      const mockUser = {
        _id: "user123",
        email: "test@example.com",
        password: "hashedPassword",
        isActive: true,
      };

      User.findOne.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue("mockToken");

      await loginUser(req, res);

      expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
      expect(bcrypt.compare).toHaveBeenCalledWith(
        req.body.password,
        mockUser.password
      );
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        user: { id: "user123", name: undefined, email: "test@example.com" },
        token: "mockToken",
      });
    });

    it("should return 400 for invalid credentials", async () => {
      const req = {
        body: { email: "test@example.com", password: "wrongPassword" },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue({
        email: "test@example.com",
        password: "hashedPassword",
        isActive: true,
      });
      bcrypt.compare.mockResolvedValue(false);

      await loginUser(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ message: "Invalid credentials" });
    });
  });

  // describe('logoutUser', () => {

  // });
});
