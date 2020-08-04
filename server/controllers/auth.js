const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sec } = require("../config/server");

const User = mongoose.model("User");

const signIn = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .exec()
    .then((user) => {
      if (!user) {
        res.status(401).json({ message: "User does not exist" });
      }
      const isValid = bcrypt.compareSync(password, user.password);
      if (isValid) {
        const token = jwt.sign(user._id.toString(), sec);
        res.json({ token });
      } else {
        res.status(401).json({ message: "wrong pass" });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};
module.exports = {
  signIn,
};
