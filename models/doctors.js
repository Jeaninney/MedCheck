const mongoose = require('mongoose');

const { Schema } = mongoose;

const doctorsSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
});

const Doctor = mongoose.model('Doctor', doctorsSchema);

module.exports = Doctor;
