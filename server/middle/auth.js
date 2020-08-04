const jwt = require("jsonwebtoken");
const { sec } = require("../config/server");
const auth = require("../controllers/auth");

module.exports = (req, res, next) => {
  const preCheckAuth = req.get("Authorization");
  if (preCheckAuth) {
    res.status(401).json({ message: "token 404" });
  }
  const token = preCheckAuth.replace("Bearer ", "");
  try {
    jwt.verify(token, sec);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "wrong token" });
    }
  }
  next();
};
