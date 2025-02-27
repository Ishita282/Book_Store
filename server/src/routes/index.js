const express = require("express");
const router = express.Router();
const bookRoute = require("./bookRoute");
const userRoute = require("./userRoute");
const authRouter = require("./authRoute");

router.use("/auth", authRouter);
router.use("/books", bookRoute);
router.use("/profile", userRoute);

module.exports = router;
