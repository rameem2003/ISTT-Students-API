const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONGO_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log(`MongoDB Atlas is Connected URL: ${URL}`);
  })
  .catch((err) => {
    console.log(err);
  });
