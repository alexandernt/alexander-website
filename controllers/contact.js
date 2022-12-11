const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
let database = require('../database/db');
let userCount = require('./index')

exports.contactFormValidator = [
    check('fcname')
        .isLength({min:2})
        .withMessage('Name must be at least 2 characters long')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Name must not be empty')
    ,
    check('fclastName')
        .isLength({min:2})
        .withMessage('Name must be at least 2 characters long')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Name must not be empty')
    ,
    check('fccompanyName')
        .escape()
        .trim()
    ,
    check('fcnumber')
        .escape()
        .trim()
    ,
    check('fcemail')
        .normalizeEmail()
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Email must not be empty')
        .isEmail()
        .withMessage('Email must be a real email address')
    ,
    check('fcmessage')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Email must not be empty')
    ,
]

exports.contactForm = function (req, res, next) {

    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        const values = req.body;
        const alert = errors.array();
        console.log(values);
        console.log(alert);
        return res.status(400).json({errors: errors.array()});
    } else {
        let contactInfo = {
            contact_name : req.body.fcname,
            contact_last_name : req.body.fclastName,
            contact_company_name : req.body.fccompanyName,
            contact_phone_number : req.body.fcnumber,
            contact_email_address : req.body.fcemail,
            contact_message : req.body.fcmessage
        }; 
        const queryToRun = 'INSERT INTO contact_info SET ?';
        database.pool.getConnection(function(err,connection){
            if(err) throw err;
            connection.query(queryToRun, contactInfo, function (error, results){
                connection.release();
                if(error) throw error;
                console.log(results);
            });
            res.send('Welcome! Here is your data');
        });
    };
};