var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects');
});


/*test purpose*/

var testupload = require('../controllers/testupload');
router.get('/test', function(req, res) {
  res.render('demopic');
});

router.post('/test', testupload.addproject);

module.exports = router;
