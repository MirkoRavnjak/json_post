import isArray from 'utils/isArray'

describe('Teat isArray', () => {

  it('should return "false" if iterate is passed like null', () => {
    const value = isArray(null)
    expect(value).toBeFalsy()
  })

  it('should return "false" if iterate is passed like undefined', () => {
    const value = isArray(undefined)
    expect(value).toBeFalsy()
  })

  it('should return "false" if iterate is passed like NaN', () => {
    const value = isArray(NaN)
    expect(value).toBeFalsy()
  })

  it('should return "false" if iterate is passed like number', () => {
    const value = isArray(1234567890)
    expect(value).toBeFalsy()
  })

  it('should return "false" if iterate is passed like ""', () => {
    const value = isArray('')
    expect(value).toBeFalsy()
  })

  it('should return "false" if iterate is passed like "string"', () => {
    const value = isArray('string')
    expect(value).toBeFalsy()
  })

  it('should return "false" if iterate is passed like []', () => {
    const value = isArray([])
    expect(value).toBeTruthy()
  })

  it('should return "true" if iterate is passed like regular Array', () => {
    const value = isArray(['Abc', 'def', 'ghi', 'Abc', 'jkl','Abc', 'mno'])
    expect(value).toBeTruthy()
  })

  it('should return "false" if iterate is passed like {}', () => {
    const value = isArray({})
    expect(value).toBeFalsy()
  })

  it('should return "false" if iterate is passed like regular object ', () => {
    const value = isArray({ name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' })
    expect(value).toBeFalsy()
  })

})
