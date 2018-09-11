export default promise => new Promise((resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve))
