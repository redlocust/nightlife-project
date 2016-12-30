const express = require("express");
const morgan = require("morgan");
const jade = require("jade");
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const Yelp = require('yelp');

var app = express();


//app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/public')));

app.set("view engine", "jade");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/", function (req, res) {

  var yelp = new Yelp({
    consumer_key: 'ypVfjVlyLK3qKsDVVe7BGQ',
    consumer_secret: 'Q1t7GtOAeCbaHmUiOupOmI2THRA',
    token: 'RNEVpmCnpTkwvCdEELJcJCBgb-MkvWgB',
    token_secret: 'BgI4RPYjIKu3TwsI2SuG0zh2A98'
  });


  var userLocation = req.body.address;

  yelp.search({term: 'food', location: userLocation})
    .then(function (data) {
      //res.send(data);
      var itemList = data.businesses;

      res.render("list", {itemList : itemList});
    })
    .catch(function (err) {
      console.error(err);
    });

});

app.listen(3000);
console.log("Server start on http://localhost:3000");