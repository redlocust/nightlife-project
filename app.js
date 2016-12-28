const express = require("express");
const morgan = require("morgan");
const jade = require("jade");

var app = express();

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(3000);
console.log("Server start on http://localhost:3000");