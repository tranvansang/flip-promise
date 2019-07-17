export default <T, U>(promise: T | Promise<T>): Promise<U> => new Promise(
  (resolve, reject) => Promise.resolve(promise).then(reject).catch(resolve)
)
