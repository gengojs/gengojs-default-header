var accept = require('gengojs-accept');

function Accept(req) {
  'use strict';
  // Lodash
  var _ = this.utils._;
  // Debug
  var debug = this.utils.debug('accept');
  /*jshint validthis:true */
  // Shortcut for options
  debug('info:', this.plugins._header);
  var options = this.plugins._header.options || {};


  // Set options
  options = _.defaults(options, require('./defaults'));
  // Expose internal API
  this.header = accept(req, options);
  debug('current locale:', this.header.getLocale(),
    'detected locale:', this.header.detectLocale());
}

module.exports = function() {
  'use strict';
  var pkg = require('./package');
  pkg.type = 'header';
  return {
    main: Accept,
    package: pkg
  };
};