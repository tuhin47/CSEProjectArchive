var express = require('express');
var router = express.Router();

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './public/profile');
  },
  filename: function(req, file, cb) {
    //  req.params.q = "something";
    cb(null, file.originalname);
  }
});

var limits = {
  fileSize: 5 * 1024 * 1024
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

router.get('/:filename', datas.photofetch);



module.exports = router;
