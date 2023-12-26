// dotEnv Configured
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const { PORT } = process.env;

// dependencies
const express = require("express");
const db = require("./database/db");

const app = express();

// use app and others
app.use(express.json());
db();

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(PORT, () => {
  console.log(`Server Listen on PORT: ${PORT}`);
});
