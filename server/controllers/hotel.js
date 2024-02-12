const Hotel = require("../models/hotelSchema");

// Create Hotel
const createHotel = async (req, res) => {
  const reqHotel = req.body;
  try {
    const saveHotel = await Hotel.create(reqHotel);
    res.status(200).json(saveHotel);
  } catch (err) {
    next(err);
  }
};

// Update Hotel
const updateHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotelUpdate = await Hotel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(hotelUpdate);
  } catch (err) {
    next(err);
  }
};

// Single Hotel
const singleHotel = async (req, res) => {
  const { id } = req.params;
  try {
    const hotel = await Hotel.findById(id);
    res.status(200).json(hotel);
  } catch (err) {
    next(err);
  }
};

// All Hotel
const allHotels = async (req, res, next) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (err) {
    next(err);
  }
};

// Delete Hotel
const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel Has been Deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  singleHotel,
  allHotels,
  deleteHotel,
};
