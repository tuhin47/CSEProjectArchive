var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cseprojects');
var db = mongoose.connection;


var Users = require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  Users.find(function(err,results){
    if (err) return console.error(err);
    console.log(results);
    res.render('batches',{results});
  });


});

module.exports = router;
