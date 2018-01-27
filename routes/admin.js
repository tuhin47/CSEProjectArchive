var express = require('express');
var flash = require('connect-flash');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var router = express.Router();
var admin_controller = require('../controllers/admin_controller');

var Admin = require('../models/admin');
var Auth = require('../controllers/authcontroller');

/* GET home page. */



router.get('/addbatch', admin_controller.addBatch);
router.post('/addbatch', admin_controller.addBatchpost);
router.get('/addcourse', admin_controller.addCourse);
router.post('/addcourse', admin_controller.addCoursepost);

router.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
  }),
  function(req, res) {
    res.redirect('/admin/dashboard');
    // res.redirect('/');
    //  res.redirect('/');
  });


router.get('/signup', function(req, res, next) {
  res.render('signup', {
    message: ""
  });
});

router.post('/signup', Auth.signup);

// GET /logout
router.get('/logout', function(req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function(err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
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
router.get('/dashboard', admin_controller.dashboard);

module.exports = router;
