

var Users = require('../models/user');
exports.data = function(req, res, next) {
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

};
