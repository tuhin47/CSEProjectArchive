var Projects = require('../models/project');

exports.showproject = function(req, res, next) {
  Projects.find({
      _id: req.params.id
    },
    function(err, results) {
      if (err) throw err;
      if (results.toString() === '') {
        res.redirect('/projects');
      }
      console.log(results);
      res.render('project', {
        results: results
      });
    });
}

exports.addproject = function(req, res, next) {

  var title = req.body.title;
  var coursename = req.body.coursename;
  var link = req.body.link;
  var description = req.body.description;
  var teammembers = [];
  for (var i = 0; i < 100; i++) {
    var temp = 'field' + i;
    if (req.body[temp]) {
      teammembers.push(req.body[temp]);
      // console.log(req.body[temp]);
    }
  }
  var project = new Projects({
    title: title,
    coursename: coursename,
    teammembers: teammembers,
    link: link,
    description: description
  });

  project.save(function(err, results) {
    if (err) console.error(err);
    if (err) throw err;
    console.log(results);
    res.redirect("/");
  });

  //  res.send(title + "  " + coursename + "  " + link + "  " + description + "  " + teammembers);


};
