'use strict';

exports.__esModule = true;
exports.getSystemInfoSync = getSystemInfoSync;
exports.requestAnimationFrame = requestAnimationFrame;
var systemInfo;

function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = ma.getSystemInfoSync();
  }

  return systemInfo;
}

function requestAnimationFrame(cb) {
  var systemInfo = getSystemInfoSync();

  if (systemInfo.platform === 'devtools') {
    return setTimeout(function () {
      cb();
    }, 1000 / 30);
  }

  return ma.createSelectorQuery().selectViewport().boundingClientRect().exec(function () {
    cb();
  });
}