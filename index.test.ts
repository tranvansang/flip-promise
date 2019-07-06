import 'regenerator-runtime'
import flipPromise from './index'

describe('promise flipper', () => {
  it('should flip promise ok', async () => {
    expect(await flipPromise(Promise.reject(1))).toEqual(1)
    expect(await flipPromise(flipPromise(2))).toEqual(2)
    expect(await flipPromise(flipPromise(Promise.resolve(3)))).toEqual(3)
  })
})
