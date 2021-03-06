const db = require("../models");

// Defining methods for the entrysController
module.exports = {
  findAll: function(req, res) {
    db.Entries
    .find(req.query)
      .sort({ comment: +1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findNew: function(req, res) {
    db.Entry
      .find(req.query)
      .sort({ date: +1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Entry
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .then(console.log("findbyid hit"))
      .catch(err => res.status(422).json(err));
  },
  findByOrbit: function(req, res) {
    db.Entry
      .find({orbit: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    
  create: function(req, res) {
    console.log("route hit", req.body);
    db.Entries
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Entry
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Entry
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
