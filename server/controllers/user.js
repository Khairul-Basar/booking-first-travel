const User = require("../models/userSchema");

// Update User
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userUpdate = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(userUpdate);
  } catch (err) {
    next(err);
  }
};

// Single User
const singleUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// All User
const allUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User Has been Deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  updateUser,
  singleUser,
  allUsers,
  deleteUser,
};
