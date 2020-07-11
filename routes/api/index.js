const router = require('express').Router();
const appointmentRoutes = require('./appointments');
const doctorRoutes = require('./doctors');
const medicationRoutes = require('./medications');

// Book routes
router.use('/appointments', appointmentRoutes);
router.use('/doctors', doctorRoutes);
router.use('/medications', medicationRoutes);

module.exports = router;
