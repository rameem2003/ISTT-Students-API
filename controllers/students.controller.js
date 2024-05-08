let users = require("../models/students.modles");

const getAllStudents = (req, res) => {
  res.status(200).send(users);
};

const getSingleUser = (req, res) => {
  let { id } = req.params;

  let getOne = users.find((user) => user.id == id);

  res.status(200).send(getOne);
};

const deleteOne = (req, res) => {
  let { id } = req.params;

  let newArray = users.filter((user) => user.id !== id);

  users = newArray;

  res.status(200).send(users);
};

module.exports = { getAllStudents, getSingleUser, deleteOne };
