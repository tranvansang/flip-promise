export default function flip(promise) {
	return new Promise((resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve))
}
