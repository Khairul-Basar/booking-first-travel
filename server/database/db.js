const mongoose = require("mongoose");

const { DB_URL } = process.env;

async function db() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected successfully!!!");
  } catch (err) {
    throw err;
  }

  mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected!");
  });
  mongoose.connection.on("connected", () => {
    console.log("Database connected!");
  });
}

module.exports = db;
