let express = require('express');
let router = express.Router();

// Calling controllers
let indexController = require('../controllers/index');

// Defining routings
router.get('/', indexController.index);
router.post('/', indexController.index);

module.exports = router;