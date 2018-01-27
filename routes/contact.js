var express = require('express');
var router = express.Router();
var Contact_controllers=require('../controllers/contact_controllers')
/* GET home page. */
router.get('/', Contact_controllers.contact);

module.exports = router;
