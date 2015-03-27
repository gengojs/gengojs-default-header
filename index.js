var accept = require('gengojs-accept');

function ship(req) {
  this.header = accept(req, this.plugins._header.options);
}

module.exports = function(options) {
  var pkg = require('./package');
  pkg.type = 'accept';
  return {
    main:ship,
    package:pkg
  };
}
