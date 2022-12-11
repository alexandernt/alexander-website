let express = require('express');
let router = express.Router();

// Calling controllers
let indexController = require('../controllers/index');
let userSubscription = require('../controllers/user_subscription');
let errorSub = require('../controllers/error-sub');
let welcome = require('../controllers/welcome');
let contactForm = require('../controllers/contact-form');
let contact = require('../controllers/contact');

// Defining routings
router.get('/', indexController.index);
router.post('/', indexController.index);
// router.get('/register', userSubscription.userSubscriptionValidation, userSubscription.userSubscription);
router.post('/register', userSubscription.userSubscriptionValidation, userSubscription.userSubscription);
// router.get('/error-subscription', errorSub.errorSub);
router.post('/error-subscription', errorSub.errorSub);
// router.get('/welcome', welcome.welcome);
router.post('/welcome', welcome.welcome);
router.get('/contact', contactForm.contactForm);
router.post('/contact', contactForm.contactForm);
router.get('/contact-val', contact.contactFormValidator, contact.contactForm)
router.post('/contact-val', contact.contactFormValidator, contact.contactForm)

module.exports = router;
