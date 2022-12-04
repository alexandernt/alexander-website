var mysql = require('mysql');
const dotenv = require('dotenv').config();

var pool  = mysql.createPool({
  host      : process.env.DB_HOST,
  user      : process.env.DB_USER,
  password  : process.env.DB_PW,
  database  : process.env.DB_DATABASE
});

module.exports.pool = pool;
