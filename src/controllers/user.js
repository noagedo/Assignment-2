// const User = require("../models/user");

// const createUser = async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// const getUserById = async (req, res) => {
//     try {
//         const user = await User.findById(req.params.userId);
//         if (user) res.json(user);
//         else res.status(404).send("User not found");
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// const updateUser = async (req, res) => {
//     try {
//         const user = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
//         if (user) res.json(user);
//         else res.status(404).send("User not found");
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// const deleteUser = async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.userId);
//         if (user) res.status(200).json({ message: "User deleted successfully" });
//         else res.status(404).send("User not found");
//     } catch (error) {
//         res.status(400).send(error.message);
//     }
// };

// module.exports = {
//     createUser,
//     getAllUsers,
//     getUserById,
//     updateUser,
//     deleteUser
// };
