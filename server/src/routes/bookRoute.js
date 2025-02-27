const express = require("express");
const router = express.Router();

const {
  getAllBooks,
  getBookByName,
  createBook,
  updateBook,
  deleteBook,
} = require("../controller/bookController");

// const authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized. No token provided" });
//   }
//   try {
//     const decoded = JsonWebTokenError.verify(token, process.env.JWt_SECRET);
//     req.user = decoded;
//     next;
//   } catch (error) {
//     return res
//       .status(401)
//       .json({ messsage: "Unauthorized. Invalid or expired token." });
//   }
// };

//public routes
router.get("/", getAllBooks);
router.get("/:id", getBookByName);
router.post("/:id", updateBook);
router.delete("/:id", deleteBook);

//protected route
router.put("/", createBook);

module.exports = router;
