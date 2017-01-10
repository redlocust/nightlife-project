const express = require('express');
const Yelp = require('yelp');
var router = express.Router();


router.route('/')
    .get((req, res) => res.render("index"))
    .post((req, res) => {

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
                res.render("list", {itemList});
            })
            .catch(function (err) {
                console.error(err);
            });

    });

module.exports = router;