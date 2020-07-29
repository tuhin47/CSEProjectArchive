var fs = require("fs");
var mongoose = require('mongoose');
//
// var conn = mongoose.connection;
//
// var gfs;
// var Grid = require("gridfs-stream");
// Grid.mongo = mongoose.mongo;
var Users = require('../models/user');

function parsingGitorLinkin(input) {
  var output = '';
  for (var i = input.length - 1; i >= 0; i--) {
    if (input.charAt(i) === '/') break;
    else output += input.charAt(i);
  }
  input = output;
  output = '';
  for (i = input.length - 1; i >= 0; i--) {
    if (input.charAt(i) === '/') break;
    else output += input.charAt(i);
  }
  
  return output;
}

exports.dataUpload = function(req, res, next) {
  // gfs = Grid(conn.db);
  
  var reg = req.body.reg;
  var name = req.body.name;
  var email = req.body.email;
  var session = req.body.session;
  var git = parsingGitorLinkin(req.body.git);
  var linkedin = parsingGitorLinkin(req.body.linkedin);
  var propic = null;
  if (req.file) {
    propic = req.session.img;

  }
  
  Users.find({
    reg: reg,
  }, function(err, results) {
    
    if (err) return console.error(err);
    else if (results.length > 0 && results[0].reg == reg) {
      res.send("Already Exist");

    } else {

      var user = new Users({

        reg: reg,
        name: name,
        email: email,
        session: session,
        git: git,
        linkedin: linkedin,
        propic: propic
      });

      user.save(function(err, results) {
        if (err) console.log(err);
        
        res.redirect("/adduser");
      });
    }

  });

};
//
// exports.photofetch = function(req, res) {
//   gfs = Grid(conn.db);
//   var readstream = gfs.createReadStream({
//     filename: req.params.filename
//   });
//   readstream.on("error", function(err) {
//     
//   });
//   readstream.pipe(res);
// };
