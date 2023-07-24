'use strict'
function flip(promise) {
	return new Promise((resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve))
}

module.exports = flip
exports.default = flip
