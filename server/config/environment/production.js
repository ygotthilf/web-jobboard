'use strict';

var path = require('path');

module.exports = {
  mongo : {
    url : 'mongodb://epitech:epitech@ds033390.mongolab.com:33390/sandbox'
  },
  static : path.join(__dirname,'..', '..', '..', 'static')
};
