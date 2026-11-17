// LECTURE: MEAN Stack Development, slides 76-77 (Express and modular structure).
// LECTURE: MEAN Stack Development, slides 44-47, 53 (CommonJS require).

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');

// LECTURE: MEAN Stack Development, slides 81-82 (create an Express app).
var app = express();

// LECTURE: MEAN Stack Development, slides 101-103 (configure EJS views).
// `views` points to template files; `view engine` selects EJS.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// LECTURE: MEAN Stack Development, slides 94-95 (Express middleware).
// morgan logs requests; express.json/urlencoded parse incoming bodies.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// LECTURE: MEAN Stack Development, slides 106-108 (express.static).
// Express exposes files under public/ at URLs such as /css/styles-laptop.css.
app.use(express.static(path.join(__dirname, 'public')));

// LECTURE: MEAN Stack Development, slides 87-88 (app.use and routing).
// The four page-specific GET handlers are defined in routes/index.js.
app.use('/', indexRouter);

// PROJECT IMPLEMENTATION: 404 handler for URLs without a matching page.
app.use(function (req, res, next) {
  next(createError(404));
});

// LECTURE: MEAN Stack Development, slides 92-93 (res.status, res.render).
// PROJECT IMPLEMENTATION: show a custom error.ejs page.
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  });
});

// LECTURE: MEAN Stack Development, slides 44-47 and 81-82 (module.exports).
module.exports = app;