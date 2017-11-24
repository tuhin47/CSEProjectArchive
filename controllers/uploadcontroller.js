var fs = require("fs");
var mongoose = require('mongoose');
var conn = mongoose.connection;

var gfs;
var Grid = require("gridfs-stream");
Grid.mongo = mongoose.mongo;

var Users = require('../models/user');

function parsingGitorLinkin(input) {
  var output='';
  for(var i=input.length-1;i>=0;i--){
    if(input.charAt(i)==='/') break;
    else output+=input.charAt(i);
  }
   input =output;
    output='';
  for( i=input.length-1;i>=0;i--){
    if(input.charAt(i)==='/') break;
    else output+=input.charAt(i);
  }
  console.log(output);
  return output;
}

exports.dataUpload = function(req, res, next) {
  gfs = Grid(conn.db);
  console.log('---------------------------->>>>in upload/data post');
  var reg = req.body.reg;
  var name = req.body.name;
  var email = req.body.email;
  var session = req.body.session;
  var git = parsingGitorLinkin(req.body.git);
  var linkedin = parsingGitorLinkin(req.body.linkedin);
  var propic =null;
  if(req.file)
  propic = reg + ".pic";


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
        else if (req.file) {

          var writestream = gfs.createWriteStream({
            filename: propic
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
        }
        console.log(results._id);
        res.redirect("/adduser");
      });
    }

  });

};

exports.photofetch =   function(req, res) {
  gfs = Grid(conn.db);
  var readstream = gfs.createReadStream({
    filename: req.params.filename
  });
  readstream.on("error", function(err) {
    console.log("No image found with that title");
  });
  readstream.pipe(res);
};
