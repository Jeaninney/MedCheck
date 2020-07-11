const mongoose = require('mongoose');

const { Schema } = mongoose;

const doctorsSchema = new Schema({
  name: { type: String, required: true },
  phone: String,
  streetaddress: String,
  zipcode: Number,
  specialty: String,
});

const Doctor = mongoose.model('Doctor', doctorsSchema);

module.exports = Doctor;
