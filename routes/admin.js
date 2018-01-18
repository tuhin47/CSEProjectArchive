var express = require('express');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var Admin = require('../models/admin');
/* GET home page. */


router.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
  }),
  function(req, res) {
    res.send("DONE");
    // res.redirect('/');
  //  res.redirect('/');
  });


router.get('/signup', function(req, res, next) {
  res.render('signup', {
    message: ""
  });
});

router.post('/signup', function(req, res) {

  var email = req.body.email;
  var password = req.body.password;
  Admin.find({
    email: email
  }, function(err, results) {
    if (err) return console.error(err);

    console.log(results);
    if (results.length > 0) {
      var usernameproblem = 'Username is not unique, take a new one';
      req.flash('error_msg', 'Username is not unique, create a new one');
      res.redirect('/demo');
      console.log('ok huh');
    } else {
      var newAdmin = new Admin({
        email: email,
        password: password
      });

      Admin.createUser(newAdmin, function(err, user) {
        if (err) throw err;
        console.log(user);
        console.log('these datas are uploaded');
      });

      //req.flash('success_msg', 'You are register and can now login');

      res.redirect('/');
      console.log('Passed');

    }
  });


  //res.redirect('login');

});

passport.use(new LocalStrategy(
  function(email, password, done) {
    Admin.getUserByEmail(email, function(err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, {
          message: 'Unknown User'
        });
      }

      Admin.comparePassword(password, user.password, function(err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {
            message: 'Invalid password'
          });
        }
      });
    });
  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Admin.getUserById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = router;
