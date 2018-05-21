var express = require('express');
var router = express.Router();

var fs = require("fs");
var contents = fs.readFileSync('./public/JSON/feed.json');

var feedJSON = JSON.parse(contents);

/* GET home page. */
router.get('/', function(req, res, next) {

  res.locals.feed = req.feedJSON;
  res.render('index', { feed: feedJSON });
});

module.exports = router;
