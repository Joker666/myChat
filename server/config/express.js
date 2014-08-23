var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var favicon = require('serve-favicon');
var session = require('express-session');

module.exports = function(app, config){
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'ejs');
    app.use(logger('dev'));
    app.use(favicon(config.rootPath + '/public/favicon.ico'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(session({ secret: 'you only live once', saveUninitialized: true, resave: true }));
    app.use(express.static(path.join(config.rootPath, 'public')));
};
