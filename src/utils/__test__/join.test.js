import join from 'utils/join'

describe('Test join', () => {

  it('should not is array', () => {
    const value = join('Hello')
    expect(value).toBeNull()
  })

  it('should join array if separator is not passed', () => {
    const joinArray = ['Hello', 'World']
    const value = join(joinArray)
    expect(value).toBe('HelloWorld')
  })

  it('should join array if separator is passed', () => {
    const joinArray = ['H','e', 'l', 'l', 'o']
    const value = join(joinArray, '/')
    expect(value).toBe('H/e/l/l/o')
  })
})
