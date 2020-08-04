const auth = require("../controllers/auth");

module.exports = (app) => {
  app.post("/signin", auth.signIn);
  app.post("/updtoken", auth.refTokens);
};
