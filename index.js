'use strict'
Object.defineProperty(exports, '__esModule', {value: true})

function flip(promise) {
	return new Promise((resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve))
}

exports.default = flip
