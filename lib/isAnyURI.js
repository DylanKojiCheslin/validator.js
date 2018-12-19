"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isAnyURI;

var _merge = _interopRequireDefault(require("./util/merge"));

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anyURIRegex = function anyURIRegex(options) {
  // the or operator can allow cases that should not be in every case '^$|'
  var allow_empty = options.no_empty_strings ? '' : '^$|';
  var pattern = '';
  pattern.concat(allow_empty);
  console.log('pattern');
  console.log(pattern);
  return new RegExp("(".concat(pattern, ")"));
};

var default_AnyURI_options = {
  no_empty_strings: false,
  no_unencoded_spaces: true
};

function isAnyURI(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_AnyURI_options);

  if (options.no_unencoded_spaces) {
    var find_unencoded_spaces_regex = '\ +';
    var there_are_unencoded_spaces = new RegExp(find_unencoded_spaces_regex).test(str);

    if (there_are_unencoded_spaces) {
      return false;
    }
  }

  return anyURIRegex(options).test(str);
}

module.exports = exports.default;