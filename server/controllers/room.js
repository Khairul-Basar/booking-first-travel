const Room = require("../models/roomeSchema");
const Hotel = require("../models/hotelSchema");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const reqRoom = req.body;

  try {
    const saveRoom = await Room.create(reqRoom);
    console.log(saveRoom);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: {
          rooms: saveRoom._id,
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(saveRoom);
  } catch (err) {
    next(err);
  }
};

// Update Room
const updateRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const roomUpdate = await Room.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(200).json(roomUpdate);
  } catch (err) {
    next(err);
  }
};

// Single Room
const singleRoom = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findById(id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};

// All Room
const allRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

// Delete Room
const deleteRooms = async (req, res) => {
  const { hotelId, id } = req.params;
  try {
    await Room.findByIdAndDelete(id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: {
          rooms: id,
        },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room Has been Deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createRoom,
  updateRoom,
  singleRoom,
  allRooms,
  deleteRooms,
};
