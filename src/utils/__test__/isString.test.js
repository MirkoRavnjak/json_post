import isString from 'utils/isString'

describe('Teat isString', () => {

  it('should return "false" if string would which is passed like null', () => {
    const value = isString(null)
    expect(value).toBeFalsy()
  })

  it('should return "false" if string would which is passed like undefined', () => {
    const value = isString(undefined)
    expect(value).toBeFalsy()
  })

  it('should return "false" if string would which is passed like NaN', () => {
    const value = isString(NaN)
    expect(value).toBeFalsy()
  })

  it('should return "false" if string would which is passed like number', () => {
    const value = isString(1234567890)
    expect(value).toBeFalsy()
  })

  it('should return "true" if string would which is passed like ""', () => {
    const value = isString('')
    expect(value).toBeTruthy()
  })

  it('should return "true" if string would which is passed like regular string ', () => {
    const value = isString('string')
    expect(value).toBeTruthy()
  })

  it('should return "false" if string would which is passed like []', () => {
    const value = isString([])
    expect(value).toBeFalsy()
  })

  it('should return "true" if string would which is passed like regular Array', () => {
    const value = isString(['Abc', 'def', 'ghi', 'Abc', 'jkl','Abc', 'mno'])
    expect(value).toBeFalsy()
  })

  it('should return "false" if string would which is passed like {}', () => {
    const value = isString({})
    expect(value).toBeFalsy()
  })

  it('should return "false" if string would which is passed like regular object ', () => {
    const value = isString({ name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' })
    expect(value).toBeFalsy()
  })

})
