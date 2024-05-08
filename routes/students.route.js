const router = require("express").Router(); // init router
const {
  getAllStudents,
  getSingleUser,
  deleteOne,
} = require("../controllers/students.controller"); // import all controllers

router.get("/", getAllStudents);
router.get("/:id", getSingleUser);
router.delete("/:id", deleteOne);

module.exports = router;
