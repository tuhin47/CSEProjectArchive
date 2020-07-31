var express = require('express');
var router = express.Router();
var students = require('../controllers/studentscontroller');
/* GET home page. */
router.get('/', students.allStudents);
router.get('/:reg', students.data);

router.get('/update/:reg',students.updatedata);

module.exports = router;
