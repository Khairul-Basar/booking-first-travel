const mongoose = require("mongoose");

const { DB_URL } = process.env;

async function db() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected successfully!!!");
  } catch (err) {
    console.log(err);
    console.log("there is a problem.");
  }
}

module.exports = db;
