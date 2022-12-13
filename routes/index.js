let express = require('express');
let router = express.Router();

// Calling controllers
let indexController = require('../controllers/index');
let userSubscription = require('../controllers/user_subscription');
let errorSub = require('../controllers/error-sub');
let contactForm = require('../controllers/contact-form');
let contact = require('../controllers/contact');

// Defining routings
router.get('/', indexController.index);
router.post('/', indexController.index);
router.post('/register', userSubscription.userSubscriptionValidation, userSubscription.userSubscription);
router.post('/error-subscription', errorSub.errorSub);
router.get('/contact', contactForm.contactForm);
router.post('/contact', contactForm.contactForm);
router.get('/contact-val', contact.contactFormValidator, contact.contactForm)
router.post('/contact-val', contact.contactFormValidator, contact.contactForm)

module.exports = router;
