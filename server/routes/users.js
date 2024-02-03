const express = require("express");
const User = require("../models/userSchema");
const createError = require("../utils/error");
const router = express.Router();
const {
  updateUser,
  singleUser,
  allUsers,
  deleteUser,
} = require("../controllers/user");
const { verifyToken, verifyUser } = require("../utils/verifyToken");

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello User, You are logged in.");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello User, You are logged in and you can delete your account.");
});
// Update User
router.put("/:id", verifyToken, updateUser);

// Single User
router.get("/:id", singleUser);

// Get All User
router.get("/", allUsers);

// Delete User
router.delete("/:id", deleteUser);

module.exports = router;
