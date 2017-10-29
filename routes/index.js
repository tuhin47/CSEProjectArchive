var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/table', function(req, res, next) {
  res.render('table', { title: 'Express' });
});

router.get('/demo', function(req, res, next) {
  res.render('demo', { title: 'Express' });
});
module.exports = router;
