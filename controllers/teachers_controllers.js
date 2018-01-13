
var fs = require("fs");
var mongoose = require('mongoose');
var sortJsonArray = require('sort-json-array');

var Teachers = require('../models/teacher');


exports.teacherprofile = function(req, res) {
  Teachers.find({
  }, function(err, results) {
    if (err) return console.error(err);
    else if (results.length > 0) {
      console.log(results);
      console.log("in teacherprofile");
      sortJsonArray(results,'serial','des');
      console.log(results);
      res.render('teachergrid',{results:results});
    }else {
      res.render('No Teacher Included');
    }

  });



};

exports.addteacherprofile = function(req, res) {
  console.log("in add teacherprofile");
  res.render('addteacher');
};

exports.teacherdataupload = function(req, res, next) {
  // gfs = Grid(conn.db);
  console.log('---------------------------->>>>in upload/data post');
  var name = req.body.name;
  var designation=req.body.designation;
  var email = req.body.email;
  var contactno=req.body.contactno;
  var roomno=req.body.roomno;
  var details=req.body.details;
  var serial=req.body.serial;
  var propic = null;
  if (req.file) {
    propic = req.session.img;

  }
  if (req.session.img)
    console.log("***************************" + req.session.img);
  else console.log("=========================");
  console.log("before DB");
  console.log('name---'+name);
  console.log('email---'+email);
  console.log('conta---'+contactno);
  console.log('name---'+roomno);
  console.log('name---'+designation);
  console.log('name---'+propic);
  console.log('details'+ details);
  console.log('serial  '+serial);



  Teachers.find({
    email:email,
    name:name,
  }, function(err, results) {
    console.log(results);
    if (err) return console.error(err);
    else if (results.length > 0 && results[0].email == email) {
      res.send("Already Exist");

    } else {
      console.log('uploading data---- in post teacherdataupload');
      var teacher= new Teachers({
        name:name,
        designation:designation,
        email:email,
        contactno:contactno,
        roomno:roomno,
        details:details,
        propic:propic,
        serial:serial
      });

      teacher.save(function(err, results) {
        if (err) console.log(err);
        console.log(results._id);
        res.redirect("/teachers/profile");
      });
    }

  });

};
