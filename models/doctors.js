const mongoose = require('mongoose');

const { Schema } = mongoose;

const doctorsSchema = new Schema({
  apidocid: { type: String, required: true },
});

const Doctor = mongoose.model('Doctor', doctorsSchema);

module.exports = Doctor;
