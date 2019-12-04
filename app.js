require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
// storage???
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

require('./app-api/api-models/db');
require('./app-api/config/passport');

var indexRouter = require('./app-server/routes/index');
var usersRouter = require('./app-server/routes/users');
var routesApi = require('./app-api/api-routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app-server', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// storage????
app.use(session({secret: 'webappcodex'}));

app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', routesApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;