const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const serverConfig = require("./config/server");
require("./models/User");
require("./models/token");

const app = express();
app.use(bodyParser.json());
require("./routes/user")(app);
require("./routes/auth")(app);

mongoose
  .connect(serverConfig.mongoData)
  .then(() =>
    app.listen(serverConfig.port, () =>
      console.log(`started on ${serverConfig.port} port`)
    )
  )
  .catch((err) =>
    console.error(`database connect err ${serverConfig.mongoData}`, err)
  );

app.get("/", (req, res) => res.send("back-end"));
