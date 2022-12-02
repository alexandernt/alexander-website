var mysql = require('mysql');
const dotenv = require('dotenv').config();

var pool  = mysql.createPool({
  host      : process.env.DB_HOST,
  user      : process.env.DB_USER,
  password  : process.env.DB_PW,
  database  : process.env.DB_DATABASE
});

// const connection = mysql.createConnection({
//     // host      : '198.54.115.169:21098',
//     // user      : 'alexiwkq',
//     // password  : 'Pr05t0p4dw@',
//     // database  : 'alexiwkq_dw'
//     host      : process.env.DB_HOST,
//     user      : process.env.DB_USER,
//     password  : process.env.DB_PW,
//     database  : process.env.DB_DATABASE
// });

// const connectionError = connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
//     console.log('connected as id ' + connection.threadId);
// });

// connection.end();

// module.exports.connection = connection;
module.exports.pool = pool;
// module.exports.connectionError = connectionError;

// %kOWoXTBshrP