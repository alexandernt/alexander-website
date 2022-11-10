var express = require('express');
var router = express.Router();

// Calling controllers
var indexController = require('../controllers/index')

// Defining routings
router.get('/', indexController.index)

module.exports = router;

