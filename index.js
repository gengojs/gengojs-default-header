var accept = require('gengojs-accept');

function ship(req, options) {
  this.accept = accept(req, options);
  return this.accept;
}

module.exports = function(options) {
  var register = ship;
  register.package = require('./package');
  register.package.type = 'accept';
  register.options = options;
  return register;
}