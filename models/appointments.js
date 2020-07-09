const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentsSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
});

const Appointment = mongoose.model('Appointment', appointmentsSchema);

module.exports = Appointment;
