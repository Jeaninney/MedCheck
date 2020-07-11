const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentsSchema = new Schema({
  purpose: { type: String, required: true },
  apptStart: { type: Date, required: true },
  apptEnd: { type: Date },
  doctorId: { type: Number },
});

const Appointment = mongoose.model('Appointment', appointmentsSchema);

module.exports = Appointment;
