
var fs = require("fs");
var mongoose = require('mongoose');
var sortJsonArray = require('sort-json-array');

var Teachers = require('../models/teacher');

exports.findteacher = function(req, res) {
  Teachers.find({
  }, function(err, results) {
    if (err) return console.error(err);
    else if (results.length >=0) {
      console.log("in teacherprofile");
      console.log(results);
      res.render('findteachers',{results:results});
    }

  });

};


exports.teacherprofile = function(req, res, next) {
  var id=req.params.id;
  console.log('--------- -> '+id);
  Teachers.find({
      _id: id
    },
    function(err, results) {
      if (err) throw err;
      if (results.toString() === '') {
        res.redirect('/');
      }
      console.log(results);
      res.render('teacher', {results:results});
    });

};

exports.editteacherprofile=function(req,res){
  var id=req.params.id;
  Teachers.find({
      _id: id
    },
    function(err, results) {
      if (err) throw err;
      if (results.toString() === '') {
        res.redirect('/');
      }else {
        console.log(results);

        res.render('editteacher', {results:results});
      }

    });
};

exports.updateteacher=function(req, res) {
var id=req.params.id;
var name = req.body.name;
var designation=req.body.designation;
var email = req.body.email;
var contactno=req.body.contactno;
var roomno=req.body.roomno;
var details=req.body.details;

var propic = null;
if (req.file) {
  propic = req.session.img;

}
if (req.session.img)
  console.log("***************************" + req.session.img);
else console.log("=========================");
console.log('lets print the id '+id );
console.log("before DB");
console.log('name---'+name);
console.log('email---'+email);
console.log('conta---'+contactno);
console.log('name---'+roomno);
console.log('name---'+designation);
console.log('name---'+propic);
console.log('details'+ details);

  var query = {
    '_id':id
  };

  Teachers.findOneAndUpdate(query, {
    $set: {
      name:name,
      designation:designation,
      email:email,
      contactno:contactno,
      roomno:roomno,
      details:details,
      propic:propic
    }
  }, {
    new: true,
    upsert: true
  }, function(err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
    }
    console.log('update data ok');
    // Teachers.find({
    //   _id: id
    // }, function(err,results) {
    //   if(err) throw err;
    //   res.render('/findteachers',{results:results});
    // });

    Teachers.find({
        _id: id
      },
      function(err, results) {
        if (err) throw err;
        if (results.toString() === '') {
          res.redirect('/');
        }
        console.log(results);
        res.render('teacher', {results:results});
      });



  });
};



exports.deleteteacherprofile=function(req,res){
  var id=req.params.id;
  Teachers.remove({
    _id: id
  }, function(err) {
    if(err) throw err;
    res.redirect('/teachers/findteachers');
  });
};





exports.addteacherprofile = function(req, res) {
  console.log("add form data");
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
        propic:propic
      });

      teacher.save(function(err, results) {
        if (err) console.log(err);
        console.log(results._id);
        res.redirect("/teachers/findteachers");
      });
    }

  });

};
