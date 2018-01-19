var Admin = require('../models/admin');

exports.signup = function(req, res) {
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

};
