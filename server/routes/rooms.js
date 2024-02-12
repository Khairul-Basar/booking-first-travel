const express = require("express");
const createError = require("../utils/error");
const router = express.Router();

const { verifyAdmin } = require("../utils/verifyToken");
const {
  createRoom,
  updateRoom,
  singleRoom,
  allRooms,
  deleteRooms,
} = require("../controllers/room");

// CREATE ROOM
router.post("/:hotelId", verifyAdmin, createRoom);

// Update ROOM
router.put("/:id/", verifyAdmin, updateRoom);

// Single ROOM
router.get("/:id", singleRoom);

// Get All ROOM
router.get("/", allRooms);

// Delete ROOM
router.delete("/:id/:hotelId", verifyAdmin, deleteRooms);

module.exports = router;
