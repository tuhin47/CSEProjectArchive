// load the things we need
var mongoose = require('mongoose');
// define the schema for our user model
var tagSchema = mongoose.Schema({

  tagName: {type:String,unique:true},
  projectId: [String]

});

module.exports = mongoose.model('Tag', tagSchema);
