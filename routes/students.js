var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('students');
});
router.get('/tada', function(req, res, next) {
  res.render('students');
});

module.exports = router;
