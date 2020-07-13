const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost/medCheck',
);

// Table definition:
//
// rxcui: { type: String, required: true },
//   medname: String,
//   dosage: String,
//   timetotake: String,
//   purpose: String,
//   prescribingdocid: Number

const medSeed = [
  {
    rxcui: '1',
    medname: 'ANORO',
    dosage: '62.5 MCG',
    timetotake: 'AM',
    purpose: 'COPD',
    prescribingdoc: 1,
  },
  {
    rxcui: '2',
    medname: 'AMLODIPINE DESYLATE',
    dosage: '5 MG',
    timetotake: 'PM',
    purpose: 'BLOOD PRESSURE',
    prescribingdoc: 2,
  },
  {
    rxcui: '3',
    medname: 'ASPRIRIN',
    dosage: '81 MG',
    timetotake: 'AM',
    purpose: 'HEART',
    prescribingdoc: 3,
  },
  {
    rxcui: '4',
    medname: 'MULTI VITAMIN',
    dosage: '1',
    timetotake: 'AM',
    purpose: 'GENERAL HEALTH',
    prescribingdoc: 0,
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
