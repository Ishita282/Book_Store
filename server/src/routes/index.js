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
    const isAuthenticated = true;
    if (!isAuthenticated) {
      return res.status(401).json({ message: "Unauthorized. Please Log in" });
    }
    next();
  },
  bookRoute
);
router.use("/users", userRoute);

module.exports = router;
