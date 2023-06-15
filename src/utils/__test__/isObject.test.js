import isObject from 'utils/isObject'

describe('Test isObject', () => {

  it('should return false if value is empty', () => {
    const value = isObject()
    expect(value).toBeFalsy()
  })

  it('should return true if value is object', () => {
    const value = isObject({ id: 1, name: 'John', age: 32 })
    expect(value).toBeTruthy()
  })

  it('should return false when value is a string', () => {
    const user = 'John'
    const value = isObject(user)
    expect(value).toBeFalsy()
  })

  it('should return false when value is true', () => {
    const user = true
    const value = isObject(user)
    expect(value).toBeFalsy()
  })

  it('should return false when value is false', () => {
    const user = false
    const value = isObject(user)
    expect(value).toBeFalsy()
  })

  it('should return false when value is array', () => {
    const user = ['John', 'Mary', 'Don']
    const value = isObject(user)
    expect(value).toBeFalsy()
  })

  it('should return false when value is null', () => {
    const user = null
    const value = isObject(user)
    expect(value).toBeFalsy()
  })

  it('should return false when value is undefined', () => {
    const user = null
    const value = isObject(user)
    expect(value).toBeFalsy()
  })

})
