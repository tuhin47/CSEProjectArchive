var mongoose = require('mongoose');
// User Schema
var ProjectSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    index: true,
    required: true,
    auto: true,
  },
  projectname: String,
  teammembers: String,

});

var Projects = module.exports = mongoose.model('Projects', ProjectSchema, 'projects');

/* test*/
/*
var project1 = new Projects({
  projectname: "test",
  teammembers: ["2013", "2014"]
});

project1.save(function(err, results) {
  console.error(results);
  console.log(results);
  if (err) throw err;
});
*/
