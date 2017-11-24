var express = require('express');
var router = express.Router();

var multer = require("multer");
var upload = multer({
  dest: "./uploads"
});

var datas = require('../controllers/uploadcontroller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('adduser');
});
router.post('/data', upload.single('propic'),datas.dataUpload);

router.get('/:filename',datas.photofetch);

module.exports = router;
