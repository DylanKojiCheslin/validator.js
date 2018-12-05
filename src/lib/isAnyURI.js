import merge from './util/merge';
import assertString from './util/assertString';

const anyURIRegex = function (options) {
  const allow_empty_strings = options.allow_empty ? '^$|' : '';
  let pattern = allow_empty_strings;
  return new RegExp(`(${pattern})`);
};

const default_AnyURI_options = {
  allow_empty: true,
};

export default function isAnyURI(str, options) {
  assertString(str);
  options = merge(options, default_AnyURI_options);
  return anyURIRegex(options).test(str);
}
