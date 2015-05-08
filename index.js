'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _gengojsAccept = require('gengojs-accept');

var _gengojsAccept2 = _interopRequireDefault(_gengojsAccept);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

/* Header class*/

var Header = (function () {
  function Header(request, options) {
    _classCallCheck(this, Header);

    // Set request
    this.request = request;
    // Set options
    this.options = options;
    // Debug
    _debug2['default']('default-header')('request exists:', !!request);
    _debug2['default']('default-header')('options:', options);
  }

  _createClass(Header, [{
    key: 'accept',
    value: function accept() {
      // Set accept
      var header = _gengojsAccept2['default'](this.request, this.options);
      // Debug
      _debug2['default']('default-header')('current:', header.getLocale());
      _debug2['default']('default-header')('detected:', header.detectLocale());
      return header;
    }
  }]);

  return Header;
})();

exports['default'] = function () {
  'use strict';
  var pkg = require('./package');
  pkg.type = 'header';
  return {
    main: function main(req) {
      var options = this.options.header;
      this.header = new Header(req, options).accept();
    },
    'package': _lodash2['default'].merge({
      type: 'header'
    }, require('./package')),
    defaults: require('./defaults')
  };
};

module.exports = exports['default'];