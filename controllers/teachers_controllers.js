
exports.teacherprofile = function(req, res) {
  console.log("in teacherprofile");
  res.render('teacher');
};

exports.addteacherprofile = function(req, res) {
  console.log("in add teacherprofile");
  res.render('addteacher');
};
