var Users = require('../models/user');


exports.data = function(req, res, next) {
  
  Users.find({
      reg: req.params.reg
    },
    function(err, results) {
      if (err) throw err;
      if (results.toString() === '') {
        res.redirect('/');
      }
      
      res.render('students', {
        results
      });
    });

};

exports.updatedata = function(req, res, next) {
  
  Users.find({
      reg: req.params.reg
    },
    function(err, results) {
      if (err) throw err;
      if (results.toString() === '') {
        res.redirect('/');
      }
      
      res.render('editstudent', {
        results
      });
    });

};
