const express = require("express");
const router = express.Router();
const bookRoute = require("./bookRoute");
const userRoute = require("./userRoute");
const authRouter = require("./authRoute");

router.get("/", (req, res) => {
  res.send("Welcome to the Bookstore");
});

router.use("/auth", authRouter);
router.use(
  "/books",
  (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized. No token provided" });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      next();
    } catch (error) {
      return res
        .status(401)
        .json({ message: "Unauthorized. Invalid or expired token" });
    }
  },
  bookRoute
);
router.use("/users", userRoute);

module.exports = router;
