const mongoose = require("mongoose");

const User = mongoose.model("User");

const getUsers = (req, res) => {
  User.find()
    .exec()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

const getUser = (req, res) => {
  User.findOne({ _id: req.params._id }, req.body)
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

const regUser = (req, res) => {
  User.create(req.body)
    .then((registeredUser) => res.json(registeredUser))
    .catch((err) => res.status(500).json(err));
};

const updUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params._id }, req.body)
    .exec()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

const delUser = (req, res) => {
  User.deleteOne({ _id: req.params._id })
    .exec()
    .then(() => res.json({ succes: true }));
};

module.exports = {
  getUsers,
  getUser,
  regUser,
  updUser,
  delUser,
};
