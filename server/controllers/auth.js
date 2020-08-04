const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tokensConf = require("../config/tokens");
const { sec } = require("../config/server").jwt;

const User = mongoose.model("User");
const Token = mongoose.model("Token");

const updateTokens = (userId) => {
  const accToken = tokensConf.genAccToken(userId);
  const refToken = tokensConf.genRefToken();

  return tokensConf.repDbRefToken(refToken.id, userId).then(() => ({
    accToken,
    refToken: refToken.token,
  }));
};

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
        updateTokens(user._id).then((tokens) => res.json(tokens));
      } else {
        res.status(401).json({ message: "wrong pass" });
      }
    })
    .catch((err) => res.status(500).json({ message: err.message }));
};

const refTokens = (req, res) => {
  const { refToken } = req.body;
  let payload;
  try {
    payload = jwt.verify(refToken, sec);
    if (payload.type !== "refresh") {
      res.status(400).json({ message: "wrong token" });
      return;
    }
  } catch (e) {
    if (e instanceof jwt.TokenExpiredError) {
      res.status(400).json({ message: "token expired" });
      return;
    } else if (e instanceof jwt.JsonWebTokenError) {
      res.status(400).json({ message: "wrong token" });
      return;
    }
  }

  Token.findOne({ tokenId: payload.id })
    .exec()
    .then((token) => {
      if (token === null) {
        throw new Error("wrong token");
      }
      return updateTokens(token.userId);
    })
    .then((tokens) => res.json(tokens))
    .catch((err) => res.status(400).json({ message: err.message }));
};

module.exports = {
  signIn,
  refTokens,
};
