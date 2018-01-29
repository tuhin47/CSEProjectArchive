var express = require('express');
var path = require('path');
var router = express.Router();

var teachers_controllers = require('../controllers/teachers_controllers');
/* GET home page. */
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/teacher');
  },
  filename: function(req, file, cb) {

    var imgname = '201788992784687614813' + req.body.contactno + '-' + new Date().getTime() + path.extname(file.originalname);
    req.session.img = imgname;
    cb(null, imgname);


  }
});

var limits = {
  fileSize: 1 * 1024 * 1024
};

var teacher = multer({
  storage: storage,
  limits: limits
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    // req.flash('error_msg', 'You are not logged in');
    res.redirect('/');
    //return next();
  }

}


router.get('/findteachers', teachers_controllers.findteacher);
router.get('/profile/:id', teachers_controllers.teacherprofile);
router.get('/edit/:id', ensureAuthenticated,teachers_controllers.editteacherprofile);
router.get('/delete/:id', ensureAuthenticated,teachers_controllers.deleteteacherprofile);

router.get('/addteacher', ensureAuthenticated,teachers_controllers.addteacherprofile);
router.post('/addteacher',ensureAuthenticated, teacher.single('propic'), teachers_controllers.teacherdataupload);
router.post('/update/:id', ensureAuthenticated,teacher.single('propic'), teachers_controllers.updateteacher);

module.exports = router;
