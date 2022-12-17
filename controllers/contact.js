const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
let database = require('../database/db');
let userCount = require('./index')

exports.contactFormValidator = [
    check('fcname')
        .isLength({min:2})
        .withMessage('First name must be at least 2 characters long')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('First name must not be empty')
    ,
    check('fclastName')
        .isLength({min:2})
        .withMessage('Last name must be at least 2 characters long')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Last name must not be empty')
    ,
    check('fccompanyName')
        .escape()
        .trim()
    ,
    check('fcnumber')
        .isLength({max:19})
        .withMessage('Phone number must not be longer than 19 digits')
        .escape()
        .trim()
    ,
    check('fcemail')
        .normalizeEmail()
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Email address must not be empty')
        .isEmail()
        .withMessage('Email address must be real')
    ,
    check('fccountry')
        .isLength({min:2})
        .withMessage('Country must be at least 2 characters long')
        .notEmpty()
        .withMessage('Country must not be empty')
    ,
    check('fclanguage')
        .isLength({min:2})
        .withMessage('Language must be at least 2 characters long')
        .notEmpty()
        .withMessage('Language must not be empty')
    ,
    check('fcmessage')
        .isLength({min:4})
        .withMessage('Message must be at least 4 characters long')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Message must not be empty')
    ,
]

exports.contactForm = function (req, res, next) {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        const values = req.body;
        const alert = errors.array();
        // console.log(values);
        // console.log(alert);
        res.render('error-contact', {alert, values})
    } else {
        let contactInfo = {
            contact_name            : req.body.fcname,
            contact_last_name       : req.body.fclastName,
            contact_company_name    : req.body.fccompanyName,
            contact_phone_number    : req.body.fcnumber,
            contact_email_address   : req.body.fcemail,
            contact_country         : req.body.fccountry,
            contact_language        : req.body.fclanguage,
            contact_message         : req.body.fcmessage
        }; 
        const queryToRun = 'INSERT INTO contact_info SET ?';
        database.pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query(queryToRun, contactInfo, function (error, results){
                connection.release();
                if(error) throw error;
                console.log(results);
            });
            res.render('contact-sent')
        });
    };
};