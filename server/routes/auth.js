const auth = require("../controllers/auth");

module.exports = (app) => {
  app.post("/signin", auth.signIn);
};
