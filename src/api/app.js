const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.get("/", (_req, res) =>
  res.status(200).json({ status: 200, message: "API is on!" })
);

module.exports = app;
