const router = require("express").Router(); // init router
const { getAllStudents } = require("../controllers/students.controller"); // import all controllers

router.get("/", getAllStudents);

module.exports = router;
