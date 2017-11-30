var express = require('express');
var router = express.Router();

var batch = require('../controllers/batchcontroller');
/* GET home page. */
router.get('/',batch.data);

module.exports = router;
