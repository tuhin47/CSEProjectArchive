var express = require('express');
var router = express.Router();
var Projects = require('../models/project');

/* GET home page. */
router.get('/', function(req, res, next) {
  Projects.find({}, function(err, results) {
    if (err) throw err;
    
    res.render('subjects', {
      results: results,
      page:'subjects'
    });
  });
});

module.exports = router;
