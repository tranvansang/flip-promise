const flip = require('./index.js').default

const assert = expectation => {
	if (!expectation) {
		throw new Error('Assertion failed')
		process.exit(1)
	}
}

async function main() {
	assert(await flip(Promise.reject(1)) === 1)
	assert(await flip(flip(2)) === 2)
	assert(await flip(flip(Promise.resolve(3))) === 3)
}

main()
