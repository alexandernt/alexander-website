var express = require('express');
var router = express.Router();

// Calling controllers
var indexController = require('../controllers/index');
var userSubscription = require('../controllers/user_subscription');

// Defining routings
router.get('/', indexController.index);
router.post('/', indexController.index);
router.get('/register', userSubscription.userSubscriptionValidation, userSubscription.userSubscription);
router.post('/register', userSubscription.userSubscriptionValidation, userSubscription.userSubscription);

module.exports = router;
// asd asdasd

