var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var session = require('express-session');
var fileupload = require('express-fileupload');


var indexRouter = require('./routes/index');
var adminRouter = require('./routes/Admin');

var app = express();

// view engine setup
app.set('views', [path.join(__dirname, 'views'),
path.join(__dirname, '/views/Admin')]);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true }));
app.use(fileupload())
app.use('/', indexRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//dbconnection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/admin_db', { useNewUrlParser: true });

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + 'mongodb://localhost:27017/admin_db');
});

mongoose.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});


module.exports = app;