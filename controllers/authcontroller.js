var Admin = require('../models/admin');

exports.signup = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  Admin.find({
    email: email
  }, function(err, results) {
    if (err) return console.error(err);

    
    if (results.length > 0) {
      var usernameproblem = 'Username is not unique, take a new one';
      req.flash('error_msg', 'Username is not unique, create a new one');
      res.redirect('/demo');
      
    } else {
      var newAdmin = new Admin({
        email: email,
        password: password
      });

      Admin.createUser(newAdmin, function(err, user) {
        if (err) throw err;
        
        
      });

      //req.flash('success_msg', 'You are register and can now login');

      res.redirect('/');
      

    }
  });


  //res.redirect('login');

};
