const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const cors = require("cors");

const app = express();
appPort = 3000;

app.listen(appPort, () => {
  console.log(`App is listening on port ${appPort}`);
});

app.get("/", (req, res) => {
  res.send("Hi there app has been lounched succesfully!");
});
