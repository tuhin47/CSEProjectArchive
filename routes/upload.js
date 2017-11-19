var express = require('express');
var router = express.Router();
var fs = require("fs");
var multer = require("multer");
var upload = multer({
  dest: "./uploads"
});
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cseprojects');
var conn = mongoose.connection;

var gfs;
var Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;

var Users = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('adduser');
});

conn.once("open", function() {
  gfs = Grid(conn.db);

  router.post('/data', upload.single('propic'), function(req, res, next) {
    console.log('---------------------------->>>>in upload/data post');
    var reg = req.body.reg;
    var name = req.body.name;
    var email = req.body.email;
    var session = req.body.session;
    var git = req.body.git;
    var linkedin = req.body.linkedin;
    var propic = reg + ".pic";


    console.log("before DB");
    Users.find({
      reg: reg,
    }, function(err, results) {
      console.log(results);
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
          else {

            var writestream = gfs.createWriteStream({
              filename: propic
            });
            //
            // //pipe multer's temp file /uploads/filename into the stream we created above. On end deletes the temporary file.
            fs.createReadStream("./uploads/" + req.file.filename)
              .on("end", function() {
                fs.unlink("./uploads/" + req.file.filename, function(err) {
                  //res.send("success")
                });
              })
              .on("err", function() {
                //  res.send("Error uploading image")
              })
              .pipe(writestream);
          }
          console.log(results._id);
          res.redirect("/adduser");
        });
      }

    });

  });

  router.post('/data', upload.single('propic'), function(req, res, next) {
    var writestream = gfs.createWriteStream({
      filename: req.file.originalname
    });
    //
    // //pipe multer's temp file /uploads/filename into the stream we created above. On end deletes the temporary file.
    fs.createReadStream("./uploads/" + req.file.filename)
      .on("end", function() {
        fs.unlink("./uploads/" + req.file.filename, function(err) {
          console.log("success");
        });
      })
      .on("err", function() {
        console.log("Error uploading image");
      })
      .pipe(writestream);

  });

});
router.get("/:filename", function(req, res) {
  var readstream = gfs.createReadStream({
    filename: req.params.filename
  });
  readstream.on("error", function(err) {
    res.send("No image found with that title");
  });
  readstream.pipe(res);
});



module.exports = router;
