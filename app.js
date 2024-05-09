const express = require("express"); // init express js
const body_parser = require("body-parser"); // init body parser
const cors = require("cors"); // init cors
const app = express(); // create new app
require("./config/database");

// import all routers
const studentRouters = require("./routes/students.route");

app.use(cors());
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

// connect all routers
app.use("/api/v1/students", studentRouters);

// Home Route
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

// Error Route
app.use((req, res, next) => {
  res.status(404).send("Rounte Not Found");
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({ massage: "Something Wrong" });
});

module.exports = app;
