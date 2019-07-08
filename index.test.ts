import 'regenerator-runtime'

describe('date.now', () => {
  it('mock', async () => {
    Date.now = () => 1
    expect(Date.now()).toBe(1)
  })
})
