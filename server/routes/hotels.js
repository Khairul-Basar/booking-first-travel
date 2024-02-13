const express = require("express");
const Hotel = require("../models/hotelSchema");
const createError = require("../utils/error");
const router = express.Router();
const {
  createHotel,
  updateHotel,
  singleHotel,
  allHotels,
  deleteHotel,
  countByCity,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");

// CREATE
router.post("/", verifyAdmin, createHotel);

// Update Hotel
router.put("/:id", verifyAdmin, updateHotel);

// Single Hotel
router.get("/find/:id", singleHotel);

// Get All Hotel
router.get("/", allHotels);

// Delete Hotel
router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/countbycity", countByCity);

module.exports = router;
