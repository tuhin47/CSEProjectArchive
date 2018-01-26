var express = require('express');
var path = require('path');
var router = express.Router();

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/profile');
  },
  filename: function(req, file, cb) {

    var imgname = req.body.reg + '-' + new Date().getTime() + path.extname(file.originalname);
    req.session.img = imgname;
    cb(null, imgname);


  }
});

var limits = {
  fileSize: 1 * 1024 * 1024
};

var upload = multer({
  storage: storage,
  limits: limits
});

var datas = require('../controllers/uploadcontroller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('adduser');
});
router.post('/data', upload.single('propic'), datas.dataUpload);

//
// router.get('/:filename', datas.photofetch);
//

module.exports = router;
