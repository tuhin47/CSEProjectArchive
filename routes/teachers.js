var express = require('express');
var router = express.Router();
var teachers_controllers = require('../controllers/teachers_controllers');
/* GET home page. */

router.get('/profile',teachers_controllers.teacherprofile);
router.get('/addteacher',teachers_controllers.addteacherprofile);

module.exports = router;
