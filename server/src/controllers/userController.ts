// const User = require("../models/userModel");

// const getUser = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createUser = async (req, res) => {
//   const { name, email, age } = req.body();
//   const newUser = new User({
//     name,
//     email,
//     password,
//   });

//   try {
//     const newUser = await newUser.save();
//     res.status(200).json(newUser);
//   } catch (error) {
//     res.status(501).json({ message: error.message });
//   }
// };

// module.exports = { getUser, createUser };
