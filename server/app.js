'use strict';

var http = require('http');
var express = require('express');
//var mongoose = require('mongoose');
var config = require('./config/environment');

//mongoose.connect(config.mongo.url);

var app = express();

require('./config/routes')(app);

http.createServer (app).listen (config.port);

console.log('Server is running');

module.exports = app;
