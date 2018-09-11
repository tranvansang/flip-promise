"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(promise) {
  return new Promise(function (resolve, reject) {
    return Promise.resolve(promise).then(reject).catch(resolve);
  });
};

exports.default = _default;
