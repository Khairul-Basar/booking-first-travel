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
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello User, You are logged in.");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello User, You are logged in and you can delete your account.");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin, You are logged in and you can delete All accounts.");
// });

// Get All User
router.get("/", verifyAdmin, allUsers);

// Update User
router.put("/:id", verifyUser, updateUser);

// Single User
router.get("/:id", verifyUser, singleUser);

// Delete User
router.delete("/:id", verifyUser, deleteUser);

module.exports = router;
