var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');
const publishersRouter = require('./routes/publishers');
const platformsRouter = require('./routes/platforms');

var app = express();

app.use(function (request, response, next) {
  console.log('Custom middleware');
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/games', gamesRouter);
app.use('/publishers', publishersRouter);
app.use('/platforms', platformsRouter);

module.exports = app;
