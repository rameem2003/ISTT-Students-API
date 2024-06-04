let Students = require("../models/students.modles");

// get all students
const getAllStudents = async (req, res) => {
  try {
    let allStudents = await Students.find();
    if (allStudents) {
      res.status(200).json(allStudents);
    } else {
      res.status(500).json({
        msg: "Somthing Went Wrong Get All Students",
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: "Somthing Went Wrong Get All Students",
      error,
    });
  }
};

// get single students
const getSingleStudent = async (req, res) => {
  let { roll } = req.params;
  try {
    let getOneStudent = await Students.findOne({ diplomaBoardRoll: roll });

    if (getOneStudent) {
      res.status(200).send(getOneStudent);
    } else {
      res.status(500).json({
        msg: `Somthing Went Wrong Get ${roll}`,
      });
    }
  } catch (error) {
    res.status(404).json({
      msg: `Somthing Went Wrong Get ${roll}`,
      error,
    });
  }
};

// add new students
const addNewStudent = async (req, res) => {
  try {
    const {
      studentNameBangla,
      studentNameEnglish,
      status,
      gender,
      department,
      diplomaBoardRoll,
      diplomaBoardReg,
      studentImage,
      fathersName,
      mothersName,
      session,
      bloodGroup,
      sscGroup,
      sscResult,
      dob,
      email,
    } = req.body;

    let newStudent = new Students({
      studentNameBangla,
      studentNameEnglish,
      status,
      gender,
      department,
      diplomaBoardRoll,
      diplomaBoardReg,
      studentImage,
      fathersName,
      mothersName,
      session,
      bloodGroup,
      sscGroup,
      sscResult,
      dob,
      email,
    });

    let checkStudentAvailable = await Students.findOne({
      diplomaBoardRoll,
    });

    if (checkStudentAvailable) {
      res.status(200).json({
        msg: "Student Already Available",
      });
    } else {
      await newStudent.save();
      res.status(201).json(newStudent);
    }
  } catch (error) {
    res.status(404).json({
      msg: "Somthing Went Wrong Create New Student",
      error,
    });
  }
};

// update one student
const updateOneStudent = async (req, res) => {
  const { roll } = req.params;
  const {
    studentNameBangla,
    studentNameEnglish,
    status,
    department,
    studentImage,
    fathersName,
    mothersName,
    session,
    bloodGroup,
    sscGroup,
    sscResult,
    dob,
    email,
  } = req.body;

  try {
    let student = await Students.findOne({ diplomaBoardRoll: roll });

    student.studentNameBangla = studentNameBangla;
    student.studentNameEnglish = studentNameEnglish;
    student.status = status;
    student.department = department;
    student.studentImage = studentImage;
    student.fathersName = fathersName;
    student.mothersName = mothersName;
    student.session = session;
    student.bloodGroup = bloodGroup;
    student.sscGroup = sscGroup;
    student.sscResult = sscResult;
    student.dob = dob;
    student.email = email;

    await student.save();

    res.status(200).json({
      msg: "Student Data Update Successfull",
    });
  } catch (error) {
    res.status(404).json({
      msg: `Somthing Went Wrong To Update The Student`,
      error,
    });
  }
};

// delete a student
const deleteOneStudent = async (req, res) => {
  let { roll } = req.params;

  try {
    await Students.deleteOne({ diplomaBoardRoll: roll });
    res.status(200).json({
      msg: `Delete Successful roll ${roll}`,
    });
  } catch (error) {
    res.status(404).json({
      msg: `Somthing Went Wrong To Delete Roll ${roll}`,
      error,
    });
  }

  res.status(200).send(users);
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  addNewStudent,
  updateOneStudent,
  deleteOneStudent,
};
