const mongoose = require('mongoose');

const { Schema } = mongoose;

const appointmentsSchema = new Schema({
	purpose: { type: String, required: true },
	apptdate: { type: Date, required: true },
  apptstart: { type: Date, required: true },
  apptend: { type: Date },
	doctorid: { type: Number },
	notes: { type: String },
});

const Appointment = mongoose.model('Appointment', appointmentsSchema);

module.exports = Appointment;
