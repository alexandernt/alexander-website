// const mysql = require('mysql');
let database = require('../database/db');

exports.index = function (req, res, next) {
    var userCount = "SELECT COUNT(DISTINCT user_subscription_id) AS total_users FROM user_subscription";
    database.connection.query(userCount, function(error, results, fields){
      if(error) throw error
      var count = results[0].total_users
      res.render('index', {data: count})
    });
};