var express = require('express');
var router = express.Router();

// Calling controllers
var indexController = require('../controllers/index');
var userSubscription = require('../controllers/user_subscription');
var errorSub = require('../controllers/error-sub');
var welcome = require('../controllers/welcome');

// Defining routings
router.get('/', indexController.index);
router.post('/', indexController.index);
router.get('/register', userSubscription.userSubscriptionValidation, userSubscription.userSubscription);
router.post('/register', userSubscription.userSubscriptionValidation, userSubscription.userSubscription);
router.get('/error-subscription', errorSub.errorSub);
router.post('/error-subscription', errorSub.errorSub);
router.get('/welcome', welcome.welcome);
router.post('/welcome', welcome.welcome);

module.exports = router;
