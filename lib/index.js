import accept from 'gengojs-accept';
import debug from 'debug';
import _ from 'lodash';
/* Header class*/
class Header {
  constructor(request, options) {
    // Set request
    this.request = request;
    // Set options
    this.options = options;
    // Debug
    debug('default-header')('request exists:', !(!request));
    debug('default-header')('options:', options);
  }
  accept() {
    // Set accept
    var header = accept(this.request, this.options);
    // Debug
    debug('default-header')('current:', header.getLocale());
    debug('default-header')('detected:', header.detectLocale());
    return header;
  }
}

export
default () => {
  'use strict';
  var pkg = require('./package');
  pkg.type = 'header';
  return {
    main: function(req) {
      var options = this.options.header;
      this.header = new Header(req, options).accept();
    },
    package: _.merge({
      type: 'header'
    }, require('./package')),
    defaults: require('./defaults')
  };
};