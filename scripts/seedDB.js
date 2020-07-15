const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost/medCheck',
);

// Table definition:
//   medname: String,
//   dosage: String,
//   timetotake: String,
//   purpose: String,
//   prescribingdocid: Number

const medSeed = [
  {
    medname: 'ANORO',
    dosage: '62.5 MCG',
    timetotake: 'AM',
    purpose: 'COPD',
    prescribingdoc: 'Dr. Jeaninne',
  },
  {
    medname: 'AMLODIPINE DESYLATE',
    dosage: '5 MG',
    timetotake: 'PM',
    purpose: 'BLOOD PRESSURE',
    prescribingdoc: 'Dr. Maria',
  },
  {
    medname: 'ASPRIRIN',
    dosage: '81 MG',
    timetotake: 'AM',
    purpose: 'HEART',
    prescribingdoc: 'Dr. Angela',
  },
  {
    medname: 'MULTI VITAMIN',
    dosage: '1',
    timetotake: 'AM',
    purpose: 'GENERAL HEALTH',
    prescribingdoc: '',
  },
];

db.Medication
  .remove({})
  .then(() => db.Medication.collection.insertMany(medSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
