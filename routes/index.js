var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});


router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/table', function(req, res, next) {
  res.render('table');
});

router.get('/demo', function(req, res, next) {
  res.render('addproject');
});
module.exports = router;
