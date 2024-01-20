// dotEnv Configured
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { PORT } = process.env;

// dependencies
const express = require("express");
const db = require("./database/db");
const cors = require("cors");

// create express app
const app = express();

// Route Dependencies
const authRoute = require("./routes/auth");
const hotelRoute = require("./routes/hotels");
const roomRoute = require("./routes/rooms");
const userRoute = require("./routes/users");

// use app and others
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
db();

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/users", userRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
app.listen(PORT, () => {
  console.log(`Server Listen on PORT: ${PORT}`);
});
