const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost/medCheck',
);

const medSeed = [
  {
    rxcui: '1',
    medname: 'ANORO',
    dosage: '62.5 MCG',
    timetotake: 'AM',
    purpose: 'COPD',
    prescribingdocid: '1',
  },
  {
    rxcui: '2',
    medname: 'AMLODIPINE DESYLATE',
    dosage: '5 MG',
    timetotake: 'PM',
    purpose: 'BLOOD PRESSURE',
    prescribingdocid: '2',
  },
  {
    rxcui: '3',
    medname: 'ASPIRIN',
    dosage: '81 MG',
    timetotake: 'AM',
    purpose: 'NONE',
    prescribingdocid: '3',
  },
];

db.Medication
  .remove({})
  .then(() => db.Medication.collection.insertMany(medSeed))
  .then(() => {
    // console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    // console.error = function (err) {
    throw new Error(err);
  });
