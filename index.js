"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (promise) { return new Promise(function (resolve, reject) { return Promise.resolve(promise).then(reject).catch(resolve); }); });
