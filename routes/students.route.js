const router = require("express").Router(); // init router
const {
  getAllStudents,
  getSingleStudent,
  addNewStudent,
  updateOneStudent,
  deleteOneStudent,
} = require("../controllers/students.controller"); // import all controllers

router.get("/", getAllStudents);
router.get("/:roll", getSingleStudent);
router.post("/", addNewStudent);
router.put("/:roll", updateOneStudent);
router.delete("/:roll", deleteOneStudent);

module.exports = router;
