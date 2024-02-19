/* eslint-disable */
var object = require('./object.sjs');
var array = require('./array.sjs');

/*
*   CamelCase Name Conversion
*/
function caseTransform(word) {
  var tagWord = word
    .replace(getRegExp("[A-Z]", 'g'), function (i) {
      return '-' + i;
    })
    .toLowerCase()

  return tagWord;
}

function style(tagStr) {
  if (array.isArray(tagStr)) {
    return tagStr
      .filter(function (item) {
        return item != null && item.length > 0;
      })
      .map(function (item) {
        return style(item);
      })
      .join(';');
  }

  if (tagStr.constructor === 'Object') {
    return object
      .keys(tagStr)
      .filter(function (key) {
        return tagStr[key] != null && tagStr[key].length !== 0;
      })
      .map(function (key) {
        return [caseTransform(key), [tagStr[key]]].join(':');
      })
      .join(';');
  }

  return tagStr;
}

module.exports = style;
