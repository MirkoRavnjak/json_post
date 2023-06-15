import find from 'utils/find'

describe('test find', () => {

  const attr1 = { name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' }
  const attr2 = { name: 'Marijana', surname: 'Ravnjak',address: 'T.V.L, 44, SM' }
  const attr3 = { name: 'Damjan', surname: 'Ravnjak',address: 'V.R.24 BP' }
  const attr4 = { name: 'Katarina', surname: 'Jovanovic', address: 'T.V.L, 44, SM' }

  const objectArray = [attr1, attr2, attr3, attr4]
  const stringArray = ['Abc', 'def', 'ghi', 'Abc', 'jkl','Abc', 'mno']

  it('should return "null" if iterate is passed like number and first is true', () => {
    const value = find(1234567890, 123, true)
    expect(value).toEqual(null)
  })

  it('should return "[]" if iterate is passed like number and first is false', () => {
    const value = find(1234567890, 123, false)
    expect(value).toEqual([])
  })

  it('should return "null" if iterate is passed like null and first is true ', () => {
    const value = find(null, 123, true)
    expect(value).toEqual(null)
  })

  it('should return "[]" if iterate is passed like null and first is false ', () => {
    const value = find(null, 123, false)
    expect(value).toEqual([])
  })

  it('should return "null" if iterate is passed like undefined and first is true', () => {
    const value = find(undefined, 123, true)
    expect(value).toEqual(null)
  })

  it('should return "[]" if iterate is passed like undefined and first is true', () => {
    const value = find(undefined, 123, false)
    expect(value).toEqual([])
  })

  it('should return "null" if iterate is passed like NaN and first is true', () => {
    const value = find(NaN, 12345, true)
    expect(value).toEqual(null)
  })

  it('should return "[]" if iterate is passed like NaN and first is false', () => {
    const value = find(NaN, 12345, false)
    expect(value).toEqual([])
  })

  it('should return "null" if iterate is passed like boolean and first is true', () => {
    const value = find(true, 123, true)
    expect(value).toEqual(null)
  })

  it('should return "[]" if iterate is passed like boolean and first is false', () => {
    const value = find(true, 123, false)
    expect(value).toEqual([])
  })

  it('should return "null" if iterate is passed like empty string and first is true', () => {
    const value = find('', 'Abc', true)
    expect(value).toEqual(null)
  })

  it('should return "[]" if iterate is passed like empty string and first is false', () => {
    const value = find('', 'Abc', false)
    expect(value).toEqual([])
  })

  it('should return "null" if iterate is passed like empty object and first is true', () => {
    const value = find({}, { address: 'T.V.L 44,SM' }, true)
    expect(value).toEqual(null)
  })

  it('should return "[]" if iterate is passed like empty object and first is false', () => {
    const value = find({}, { address: 'T.V.L 44,SM' }, false)
    expect(value).toEqual([])
  })

  it('should return false if iterate is passed like string and first is true' , () => {
    const value = find( 'string', 'str', true)
    expect(value).toEqual(null)
  })

  it('should return "[]" if iterate is passed like string and first is false' , () => {
    const value = find( 'string', 'str', false)
    expect(value).toEqual([])
  })

  it('should return first finding element  if iterate is passed like array of strings, condition is one of string and first is true ' , () => {
    const value = find( stringArray, 'Abc', true)
    expect(value).toEqual('Abc')
  })

  it('should return array of all find , if iterate is passed like array of strings and one of string to  appear more that one time , condition is that string and first is false ' , () => {
    const value = find( stringArray, 'Abc', false)
    expect(value).toEqual(['Abc', 'Abc', 'Abc'])
  })

  it('should return null if iterate is passed like array of strings, condition is not in the array and first is true ' , () => {
    const value = find( stringArray, 'abc', true)
    expect(value).toEqual(null)
  })

  it('should return [] if iterate is passed like array of strings , condition is not in the array and first is false ' , () => {
    const value = find( stringArray, 'abc', false)
    expect(value).toEqual([])
  })

  it('should return first of finding object who is contains condition when is first set to true', () => {
    const value = find(objectArray, { address: 'T.V.L, 44, SM' }, true)
    expect(value).toEqual(
      {
        name: 'Mirko',
        surname: 'Ravnjak',
        address: 'T.V.L, 44, SM'
      },
    )
  })

  it('should return array of all finding objects who is contains condition and  when is first set to false', () => {
    const value = find(objectArray, { address: 'T.V.L, 44, SM' }, false)
    expect(value).toEqual([
      {
        name: 'Mirko',
        surname: 'Ravnjak',
        address: 'T.V.L, 44, SM'
      },
      {
        name: 'Marijana',
        surname: 'Ravnjak',
        address: 'T.V.L, 44, SM',
      },
      {
        name: 'Katarina',
        surname: 'Jovanovic',
        address: 'T.V.L, 44, SM',
      }]
    )
  })

  it('should return null, if is condition not to be in array and  when is first set to true', () => {
    const value = find(objectArray, { address: 'T.V.L 44, Not Existing' }, true)
    expect(value).toEqual(null)
  })

  it('should return empty array, if is condition not to be in array and  when is first set to false', () => {
    const value = find(objectArray, { address: 'T.V.L 44, Not Existing' }, false)
    expect(value).toEqual([])
  })

})
