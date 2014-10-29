var path = require('path');
var _ = require('lodash');

var defaults = {
  env: process.env.NODE_ENV || 'development',
  port : process.env.PORT || 9000,
  static : path.join(__dirname,'..', '..', '..', 'client')
}

module.exports = _.merge(defaults, require('./'+defaults.env) || {});

