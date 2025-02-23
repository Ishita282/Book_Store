const request = require("supertest");
const app = require("../src/app");

describe("API Endpoints", () => {
  //Test get/
  it("should return a welcome message for the root endpoint", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Welcome to the Bookstore");
  });
  //test get /favicon.ico
  it("should return 204 for favicon.ico", async () => {
    const res = await request(app).get("/favicon.ico");
    expect(res.statusCode).toEqual(204);
  });
  //test a 404 res for an invalid endpoint
  it("should return 404 for an unknown route", async () => {
    const res = await request(app).get("/unknown");
    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message", "Not Found: /unknown");
  });
  //Test get /api
  it("should return a list of resources for /api endpoint", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBeDefined();
  });
  //   //test post /api/example
  //   it("should create a new resource", async () => {
  //     const payload = { title: "New Book", author: "Author Name" };
  //     const res = await request(app).post("/api/example").send(payload);
  //     expect(res.statusCode).toEqual(201);
  //     expect(res.text).toHaveProperty("id");
  //   });
});
