const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicationsSchema = new Schema({
  apimedid: { type: String, required: true },
  medname: String,
  freq: String,
  purpose: String,
  docid: Number,
});

const Medication = mongoose.model('Medication', medicationsSchema);

module.exports = Medication;
