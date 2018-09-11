import chai, {expect} from 'chai'
import flipPromise from './index'

describe('promise flipper', () => {
  it('should flip promise ok', async () => {
    expect(await flipPromise(Promise.reject(1))).to.equal(1)
    expect(await flipPromise(flipPromise(2))).to.equal(2)
    expect(await flipPromise(flipPromise(Promise.resolve(3)))).to.equal(3)
  })
})
