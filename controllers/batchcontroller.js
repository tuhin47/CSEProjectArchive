

var Users = require('../models/user');


exports.data = function(req, res, next) {
  Users.find(function(err,results){
    if (err) return console.error(err);
    res.render('batches',{results});
  });
};
