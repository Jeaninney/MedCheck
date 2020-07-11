const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicationsSchema = new Schema({
  rxcui: { type: String, required: true },
  medname: String,
  dosage: String,
  timetotake: String,
  purpose: String,
  prescribingdocid: Number,
});

const Medication = mongoose.model('Medication', medicationsSchema);

module.exports = Medication;
