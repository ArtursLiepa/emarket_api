const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const cors = require("cors");
const getProducts = require("../src/Modules/products/Routes/product-routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", getProducts);

appPort = 3000;
dbAdress = "mongodb://localhost:27017/emarket";

async function startServer() {
  mongoose
    .connect(dbAdress)
    .then(() => {
      console.log("Database connected!".bgGreen);
      app.listen(appPort, () => {
        console.log(`App is listening on port ${appPort}`);
      });
    })
    .catch("error", (error) => {
      console.log(error);
    });
}

app.get("/", (req, res) => {
  res.send("Hi there app has been lounched succesfully!");
});

startServer();
