export default <T>(promise: T | Promise<T>) => new Promise(
  (resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve)
)
