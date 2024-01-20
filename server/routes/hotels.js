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
} = require("../controllers/hotel");

// CREATE
router.post("/", createHotel);

// Update Hotel
router.put("/:id", updateHotel);

// Single Hotel
router.get("/:id", singleHotel);

// Get All Hotel
router.get("/", allHotels);

// Delete Hotel
router.delete("/:id", deleteHotel);

module.exports = router;
