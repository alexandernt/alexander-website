let database = require('../database/db');
let userCount = require('./index')
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

exports.userSubscriptionValidation = [
    check('userSubsName')
        .isLength({min:2})
        .withMessage('Name must be at least 2 characters long')
        .escape()
        .trim()
        .notEmpty()
        .withMessage('Name must not be empty')
 
    ,
    check('userSubsEmail')
        .normalizeEmail()
        .escape()
        .withMessage('Only allow characters')
        .trim()
        .notEmpty()
        .withMessage('Email must not be empty')
        .isEmail()
        .withMessage('Email must be a real email address')
    ,
]

exports.userSubscription = function(req, res){

    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        console.log(req.body);
        console.log(errors)
        const values = req.body;
        const alert = errors.array();
        // return res.status(400).json({errors: errors.array()})
        var userCount = "SELECT COUNT(DISTINCT user_subscription_id) AS total_users FROM user_subscription";
        database.connection.query(userCount, function(error, results, fields){
            if(error) throw error;
            var count = results[0].total_users;
            res.render('index', {alert, values, data: count});
        })
        
    } else {
        let userSubscritpion = {
            user_subscription_email : req.body.userSubsEmail,
            user_subscription_name  : req.body.userSubsName
        };
        const queryToRun = 'INSERT INTO user_subscription SET ?';
        database.connection.query(queryToRun, userSubscritpion, function(error, results){
            if(error) throw error
            else {
                console.log(results)
                // let userCount = "SELECT COUNT(DISTINCT user_subscription_id) AS total_users FROM user_subscription";
                // database.connection.query(userCount, function(error, results, fields){
                //     if(error) throw error
                //     else console.log(results, fields)
                // })
                res.send('Email registered. Thanks ' + req.body.userSubsName)
            };
        });
    } 
};
  