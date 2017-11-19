var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cseprojects');
var db = mongoose.connection;


var Users = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('students');
});
router.get('/:reg', function(req, res, next) {
  console.log(req.params.reg);
  Users.find({
      reg: req.params.reg
    },
    function(err, results) {
      if (err) return console.error(err);
      console.log(results);
      res.render('students', {
        results
      });
    });


});

module.exports = router;
