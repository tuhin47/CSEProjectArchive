var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects');
});


router.get('/test', function(req, res) {
  res.render('demopic');
});


/*test purpose*/
/*
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

var upload = multer({
  storage: storage
});

router.post('/test', upload.single('img'), function(req, res, err) {
  if (err) console.log(err);
  console.log("==================");
  res.redirect('/');
});
*/
module.exports = router;
