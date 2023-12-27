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

// Update Hotel
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updatedHotel);
    res.status(200).json(updatedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Single Hotel
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    console.log(hotel);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Hotel
router.get("/", async (req, res) => {
  try {
    const allHotels = await Hotel.find();
    res.status(200).json(allHotels);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Hotel
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Has been Deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
