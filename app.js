const express = require("express");
const morgan = require("morgan");
const jade = require("jade");
const path = require('path');

var app = express();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname + '/public')));

app.set("view engine", "jade");

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/", function (req, res) {
  res.sendFile(__dirname + "/public/img/hamster.jpg");
});

app.listen(3000);
console.log("Server start on http://localhost:3000");