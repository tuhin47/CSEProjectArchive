var express = require('express');
var router = express.Router();
var projects = require('../controllers/projects')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects');
});


router.get('/add' ,projects.addproject);

module.exports = router;
