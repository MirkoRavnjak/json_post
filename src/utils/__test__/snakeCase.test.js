const { default: snakeCase } = require('utils/snakeCase')

describe('test snakeCase', () => {

  const attr1 = { name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' }

  it('should return empty string if forwarded null', () => {
    const value = snakeCase(true)
    expect(value).toEqual('')
  })

  it('should return empty string if forwarded undefined', () => {
    const value = snakeCase(undefined)
    expect(value).toEqual('')
  })
  it('should return empty string if forwarded NaN', () => {
    const value = snakeCase(NaN)
    expect(value).toEqual('')
  })
  it('should return empty string if forwarded number', () => {
    const value = snakeCase(1234567890)
    expect(value).toEqual('')
  })
  it('should return empty string if forwarded empty string', () => {
    const value = snakeCase('')
    expect(value).toEqual('')
  })
  it('should return empty string if forwarded "regular string 1"', () => {
    const value = snakeCase(' regular string 1 ')
    expect(value).toEqual('regular_string_1')
  })
  it('should return empty string if forwarded empty object', () => {
    const value = snakeCase({})
    expect(value).toEqual('')
  })
  it('should return empty string if forwarded regular object', () => {
    const value = snakeCase({ attr1 })
    expect(value).toEqual('')
  })
  it('should return empty string if forwarded empty array', () => {
    const value = snakeCase([])
    expect(value).toEqual('')
  })

  it('should return empty string if forwarded regular array', () => {
    const value = snakeCase(['Abc', 'def', 'ghi', 'Abc', 'jkl','Abc', 'mno'])
    expect(value).toEqual('')
  })

  it('should return empty string if forwarded aray of objects', () => {
    const value = snakeCase([attr1, attr1])
    expect(value).toEqual('')
  })

})
