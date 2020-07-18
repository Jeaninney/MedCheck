const db = require('../models');

// Defining methods for the medicationsController
module.exports = {
  findAll(req, res) {
		if (req.user) {
			db.Appointment
				.find(req.query)
				.sort({ date: -1 })
				.then((dbModel) => res.json(dbModel))
				.catch((err) => res.status(422).json(err));
		} else {
			res.status(401).end();
		}
  },
  findById(req, res) {
    db.Appointment
      .findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create(req, res) {
    db.Appointment
      .create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update(req, res) {
    db.Appointment
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove(req, res) {
    db.Appointment
      .findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
