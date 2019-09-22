"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
app.use(cors());
const router = express.Router();

//Connecting database
mongoose.connect("mongodb+srv://root:root@cluster0-6xeoe.mongodb.net/test", {
  useNewUrlParser: true
}, { useCreateIndex: true }, { useFindAndModify: false });

//Importing models
const User = require("./models/user");

//Importing routes
const indexRoute = require("./routes/index-router");
const userRoute = require("./routes/user-route");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use("/", indexRoute);
app.use("/user", userRoute);

module.exports = app;
