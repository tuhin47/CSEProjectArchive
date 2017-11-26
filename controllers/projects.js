var Project = require('../models/project');

exports.addproject = function(req, res, next) {


  var projecttitle = req.body.title;
  var cousename = req.body.cousename;

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
