import merge from './util/merge';
import assertString from './util/assertString';

const anyURIRegex = function (options) {
  // the or operator can allow cases that should not be in every case '^$|'
  const allow_empty = options.allow_empty_strings ? '^$|' : '';
  let pattern = '';
  pattern.concat(allow_empty);
  return new RegExp(`(${pattern})`);
};

const default_AnyURI_options = {
  allow_empty_strings: true,
  no_unencoded_spaces: true,
};

export default function isAnyURI(str, options) {
  assertString(str);
  options = merge(options, default_AnyURI_options);
  if (options.no_unencoded_spaces) {
    const find_unencoded_spaces_regex = '\ +';
    const there_are_unencoded_spaces = new RegExp(find_unencoded_spaces_regex).test(str);
    if (there_are_unencoded_spaces) { return false; }
  }
  return anyURIRegex(options).test(str);
}
