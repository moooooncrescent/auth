const jwt = require("jsonwebtoken");
const { sec } = require("../config/server").jwt;
const auth = require("../controllers/auth");

module.exports = (req, res, next) => {
  const preCheckAuth = req.get("Authorization");
  if (!preCheckAuth) {
    res.status(401).json({ message: "token 404" });
    return;
  }
  const token = preCheckAuth.replace("Bearer ", "");
  try {
    const payload = jwt.verify(token, sec);
    if (payload.type !== "access") {
      res.status(401).json({ message: "wrong token" });
      return;
    }
  } catch (e) {
    if ((e instanceof jwt, jwt.TokenExpiredError)) {
      res.status(401).json({ message: "token expired" });
    }
    if (e instanceof jwt.JsonWebTokenError) {
      res.status(401).json({ message: "wrong token" });
      return;
    }
  }
  next();
};
