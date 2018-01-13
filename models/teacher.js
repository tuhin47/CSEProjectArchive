var mongoose = require('mongoose');

// User Schema
var TeacherSchema = mongoose.Schema({

	name: {
		type: String,
    index:true
	},
	designation: {
		type: String
	},
	email: {
		type: String,
    index:true

	},
  contactno:{
    type:String
  },
  roomno:{
    type: String
  },
	details :{
		type:String
	},
  propic :{
    type:String
  },
	serial:{
		type:Number
	}

});

var Teachers = module.exports = mongoose.model('Teachers', TeacherSchema,'teachers');
