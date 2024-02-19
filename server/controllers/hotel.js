const Hotel = require("../models/hotelSchema");
const Room = require("../models/roomeSchema");

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

// search Hotel for cities
const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};

const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createHotel,
  updateHotel,
  singleHotel,
  allHotels,
  deleteHotel,
  countByCity,
  countByType,
  getHotelRooms,
};
