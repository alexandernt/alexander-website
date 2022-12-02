var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const allRoutes = require('./routes/index');
const { connect } = require('http2');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();


// ---------------------------- VIEW ENGINE SETUP ---------------------------- \\
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
  extended: true
}))

// Routes
app.use(allRoutes);

// ---------------------------- CATCH 404 && FORWARD TO ERROR HANDLER ---------------------------- \\
app.use(function(req, res, next) {
  next(createError(404));
});

// ---------------------------- ERROR HANDLER ---------------------------- \\
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
