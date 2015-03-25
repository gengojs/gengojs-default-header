var accept = require('gengojs-accept');

function ship(req) {
  this.accept = accept(req, {
    default: this.settings.default(),
    supported: this.settings.supported(),
    keys: this.settings.keys(),
    detect: this.settings.detect()
  });
  return this.accept;
}

module.exports = function() {
  var register = ship;
  register.package = require('./package');
  return register;
}