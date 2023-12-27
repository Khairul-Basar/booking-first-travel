const express = require("express");
const Hotel = require("../models/hotelSchema");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  const reqHotel = req.body;
  try {
    const createHotel = await Hotel.create(reqHotel);
    res.status(200).json(createHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
