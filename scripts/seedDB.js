const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
  process.env.MONGODB_URI
  || 'mongodb://localhost/medCheck',
);

// Prescription table definition:
//   medname: String,
//   dosage: String,
//   timetotake: String,
//   purpose: String,
//   prescribingdocid: Number

// const medSeed = [
//   {
//     medname: 'ANORO',
//     dosage: '62.5 MCG',
//     timetotake: 'AM',
//     purpose: 'COPD',
//     prescribingdoc: 'Dr. Jeaninne',
//   },
//   {
//     medname: 'AMLODIPINE DESYLATE',
//     dosage: '5 MG',
//     timetotake: 'PM',
//     purpose: 'BLOOD PRESSURE',
//     prescribingdoc: 'Dr. Maria',
//   },
//   {
//     medname: 'ASPRIRIN',
//     dosage: '81 MG',
//     timetotake: 'AM',
//     purpose: 'HEART',
//     prescribingdoc: 'Dr. Angela',
//   },
//   {
//     medname: 'MULTI VITAMIN',
//     dosage: '1',
//     timetotake: 'AM',
//     purpose: 'GENERAL HEALTH',
//     prescribingdoc: '',
//   },
// ];

// db.Medication
//   .remove({})
//   .then(() => db.Medication.collection.insertMany(medSeed))
//   .then(() => {
//     process.exit(0);
//   })
//   .catch(() => {
//     process.exit(1);
//   });

// Doctor table definition:
// name: { type: String, required: true },
// phone: String,
// address: String,
// address2: String,
// city: String,
// state: String,
// zipcode: Number,
// specialty: String

const docSeed = [
  {
    name: 'Dr. Jeaninne',
    phone: '703-999-9999',
    address: '123 Main Street',
    address2: '',
    city: 'Arlington',
    state: 'VA',
    zipcode: '20330',
    specialty: 'Cardiologist',
  },
  {
    name: 'Dr. Maria',
    phone: '703-888-8888',
    address: '123 West St.',
    address2: '',
    city: 'Alexandria',
    state: 'VA',
    zipcode: '22206',
    specialty: 'Nutritionist',
  },
  {
    name: 'Dr. Jasmine',
    phone: '301-777-7777',
    address: '88 Mulbery St.',
    address2: '',
    city: 'Silver Spring',
    state: 'MD',
    zipcode: '20815',
    specialty: 'Acupuncture',
  },
  {
    name: 'Dr. Angela',
    phone: '703-555-5555',
    address: '21420 Deepwood Ter',
    address2: 'Suite 207',
    city: 'Ashburn',
    state: 'VA',
    zipcode: '20148',
    specialty: 'Crazy People',
  },
];

db.Doctor
  .remove({})
  .then(() => db.Doctor.collection.insertMany(docSeed))
  .then(() => {
    process.exit(0);
  })
  .catch(() => {
    process.exit(1);
  });
