var Project = require('../models/project');



exports.addproject = function(req, res, next) {

  var title = req.body.title;
  var coursename = req.body.coursename;
  var teammembers;
  for (var i = 0; i < req.body.length; i++) {
    teammembers.push();
  }

  var link = req.body.title;
  var description = req.body.title;
  var project1 = new Projects({
    projectname: "test",
    teammembers: ["2013", "2014"]
  });

  project1.save(function(err, results) {
    console.error(results);
    console.log(results);
    if (err) throw err;
  });

};
