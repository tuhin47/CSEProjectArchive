var express = require('express');
var router = express.Router();
var students = require('../controllers/studentscontroller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/batches');
});
router.get('/:reg', students.data);

module.exports = router;
