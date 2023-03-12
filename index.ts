export default function flip<T, U>(promise: T | Promise<T>): Promise<U> {
	return new Promise(
		(resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve)
	)
}
