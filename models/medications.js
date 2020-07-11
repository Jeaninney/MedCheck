const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicationsSchema = new Schema({
  apimedid: { type: String, required: true },
  freq: { type: String },
  expiration: Date,
  refillsleft: Number,
  refilldate: Date,
  docid: Number,
});

const Medication = mongoose.model('Medication', medicationsSchema);

module.exports = Medication;
