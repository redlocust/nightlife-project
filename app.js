const express = require("express");
const morgan = require("morgan");
const jade = require("jade");
const path = require('path');
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/homeRoutes');

var app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/public')));

app.set("view engine", "jade");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', homeRoutes);

app.listen(3000);
console.log("Server start on http://localhost:3000");

module.exports = app;