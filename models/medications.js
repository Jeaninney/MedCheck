const mongoose = require('mongoose');

const { Schema } = mongoose;

const medicationsSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
});

const Medication = mongoose.model('Medication', medicationsSchema);

module.exports = Medication;
