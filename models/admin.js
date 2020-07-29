// load the things we need
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');


// define the schema for our user model
var adminSchema = mongoose.Schema({

  email: {type:String,unique:true},
  password: String

});

// create the model for users and expose it to our app
var Admin=module.exports = mongoose.model('Admin', adminSchema);

module.exports.createUser = function(newUser, callback){
	//if (!user.isModified('password')) return next();
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt,null, function(err, hash) {
				if(err) throw err;
			console.log(newUser.password,hash);
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
};

module.exports.getUserByEmail = function(email, callback){
	var query = {email: email};
	Admin.findOne(query, callback);
};

module.exports.getUserById = function(id, callback){
	Admin.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err,isMatch) {
			if (err) throw err;
    	callback(null, isMatch);
	});
};
