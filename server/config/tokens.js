const uuid = require("uuid").v4;
const jwt = require("jsonwebtoken");
const { sec, tokens } = require("../config/server").jwt;
const mongoose = require("mongoose");

const Token = mongoose.model("Token");

const genAccToken = (userId) => {
  const payload = {
    userId,
    type: tokens.access.type,
  };
  const options = {
    expiresIn: tokens.access.expiresIn,
  };
  return jwt.sign(payload, sec, options);
};

const genRefToken = () => {
  const payload = {
    id: uuid(),
    type: tokens.refresh.type,
  };
  const options = {
    expiresIn: tokens.refresh.expiresIn,
  };
  return {
    id: payload,
    token: jwt.sign(payload, sec, options),
  };
};

const repDbRefToken = (tokenId, userId) =>
  Token.findOneAndRemove({ userId })
    .exec()
    .then(() => Token.create({ tokenId, userId }));

module.exports = {
  genAccToken,
  genRefToken,
  repDbRefToken,
};
