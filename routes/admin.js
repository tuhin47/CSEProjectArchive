var express = require('express');
var router = express.Router();
var Admin_controller = require('../controllers/admin_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin');
});
router.get('/dashboard',Admin_controller.dashboard);

module.exports = router;
