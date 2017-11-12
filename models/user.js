var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
	  reg: {
		type: String,
		unique:true,
		index:true
	},
	name: {
		type: String
	},
	email: {
		type: String
	},
	session: {
		type: String
	},
  git:{
    type:String
  },
  linkedin:{
    type: String
  }

});

var Users = module.exports = mongoose.model('Users', UserSchema,'users');
