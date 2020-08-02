const users = require("../controllers/user");

module.exports = (app) => {
  app.get("/getusers", users.getUsers);
  app.get("/getuser/:_id", users.getUser);
  app.post("/reguser", users.regUser);
  app.put("/upduser/:_id", users.updUser);
  app.delete("/deluser/:_id", users.delUser);
};
