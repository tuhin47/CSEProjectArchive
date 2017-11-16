var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cseprojects');
var db = mongoose.connection;


var Users = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('upload');
});


router.post('/data', function(req, res) {
  console.log('---------------------------->>>>in upload/data post');
  var reg = req.body.reg;
  var name = req.body.name;
  var email = req.body.email;
  var session = req.body.session;
  var git = req.body.git;
  var linkedin = req.body.linkedin;

  // 	// Validation

  console.log('enter');
  Users.find({
    reg: reg,
  }, function(err, results) {
    console.log(results);
    if (err) return console.error(err);
    else if (results.length > 0 && results[0].reg == reg) {
      res.redirect('/adduser');
    } else {
      var user = new Users({

        reg: reg,
        name: name,
        email: email,
        session: session,
        git: git,
        linkedin: linkedin

      });
      console.log(user);
      user.save(function(err, results) {
        console.log(results._id);
      });
      res.redirect('/adduser');
    }

  });
});


module.exports = router;
