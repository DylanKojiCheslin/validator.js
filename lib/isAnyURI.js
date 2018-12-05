"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAnyURI;

var _merge = _interopRequireDefault(require("./util/merge"));

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anyURIRegex = function anyURIRegex(options) {
  var allow_empty_strings = options.allow_empty ? '^$|' : '';
  var pattern = allow_empty_strings;
  return new RegExp("(".concat(pattern, ")"));
};

var default_AnyURI_options = {
  allow_empty: true
};

function isAnyURI(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_AnyURI_options);
  return anyURIRegex(options).test(str);
}

module.exports = exports.default;