const users = require("../models/students.modles");

const getAllStudents = (req, res) => {
  res.status(200).send(users);
};

module.exports = { getAllStudents };
