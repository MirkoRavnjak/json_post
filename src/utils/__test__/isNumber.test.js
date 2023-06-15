import isNumber from 'utils/isNumber'

describe('Test isNumber', () => {

  it('should return false when value passed like null', () => {
    const value = isNumber(null)
    expect(value).toEqual(false)
  })

  it('should return false when value passed like undefined', () => {
    const value = isNumber(undefined)
    expect(value).toEqual(false)
  })

  it('should return false when value passed like NaN ', () => {
    const value = isNumber(NaN)
    expect(value).toEqual(false)
  })

  it('should return false when value passed like empty string', () => {
    const value = isNumber('')
    expect(value).toEqual(false)
  })

  it('should return false when value passed like regular string', () => {
    const value = isNumber('string')
    expect(value).toEqual(false)
  })

  it('should return false when value passed like empty Array', () => {
    const value = isNumber([])
    expect(value).toEqual(false)
  })

  it('should return false when value passed like regular Array ', () => {
    const value = isNumber(['string', 1, 'next' ])
    expect(value).toEqual(false)
  })

  it('should return false when value passed like empty object', () => {
    const value = isNumber({})
    expect(value).toEqual(false)
  })

  it('should return false when value passed like empty object', () => {
    const value = isNumber(4)
    expect(value).toEqual(true)
  })

})
