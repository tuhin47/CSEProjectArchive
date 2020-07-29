var Courses = require('../models/course');
var Batches = require('../models/batch');
var Projects = require('../models/project');


exports.dashboard = function(req, res, next) {
  Projects.find({}, function(err, results) {
    if (err) throw err;
    res.render('dashboard', {
      results: results
    });
  });
};

exports.addBatch = function(req, res) {
  res.render('addBatch');
};

exports.addBatchpost = function(req, res, next) {

  

  Batches.find({
    batch: req.body.batch
  }, function(err, results) {
    
    if (err) return console.error(err);
    else if (results.length > 0) {
      res.send("Already Exist");
    } else {
      
      var batch = new Batches({
        batch: req.body.batch
      });

      batch.save(function(err, results) {
        if (err) throw err;
        //
        res.redirect("/admin/dashboard");
      });
    }

  });

};

exports.addCourse = function(req, res) {
  
  Batches.find({}, function(err, batches) {
    if (err) throw err;
    else {
      
      res.render('addCourse', {
        batches: batches
      });
    }
  });

};

exports.addCoursepost = function(req, res, next) {
  // gfs = Grid(conn.db);
  


  Courses.find({
    $and: [{
        courseTitle: req.body.coursename
      },
      {
        batch: req.body.batch
      }
    ]
  }, function(err, results) {
    
    if (err) return console.error(err);
    else if (results.length > 0) {
      res.send("Already Exist");

    } else {
      
      var course = new Courses({
        courseTitle: req.body.coursename,
        batch: req.body.batch
      });

      course.save(function(err, results) {
        if (err) throw err;
        //
        
        res.redirect("/admin/dashboard");
      });
    }

  });

};
