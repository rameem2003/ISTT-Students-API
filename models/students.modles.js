const mongoose = require("mongoose");

const studentsSchema = mongoose.Schema({
  studentNameBangla: {
    type: String,
    require: true,
  },

  studentNameEnglish: {
    type: String,
    require: true,
  },

  status: {
    type: Boolean,
    default: false,
  },

  department: {
    type: String,
    require: true,
  },

  diplomaBoardRoll: {
    type: Number,
    require: true,
  },
  diplomaBoardReg: {
    type: Number,
    require: true,
  },
  studentImage: {
    type: String,
    require: true,
  },
  fathersName: {
    type: String,
    require: true,
  },
  mothersName: {
    type: String,
    require: true,
  },
  session: {
    type: String,
    require: true,
  },

  bloodGroup: {
    type: String,
    require: true,
  },

  sscGroup: {
    type: String,
    require: true,
  },

  sscResult: {
    type: String,
    require: true,
  },

  dob: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("students", studentsSchema);
