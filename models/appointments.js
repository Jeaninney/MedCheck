const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentsSchema = new Schema({
  purpose: { type: String, required: true },
  apptstart: { type: Date, required: true },
  apptend: { type: Date },
  doctorid: { type: Number },
});

const Appointment = mongoose.model('Appointment', appointmentsSchema);

module.exports = Appointment;
