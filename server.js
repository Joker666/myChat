var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

var io = require('socket.io').listen(app.listen(config.port));

require('./server/config/express')(app, config);

require('./server/config/routes')(app);

console.log('Listening on port ' + config.port + '...');
