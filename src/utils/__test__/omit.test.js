import omit from 'utils/omit'

describe('Test omit', () => {

  const obj = { name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' , gender: 'male' , age: 53 }
  const array = ['name', 'surname', 'address', 'age', 'gender' ]

  it('should return empty object, if keys passed like null and object is regular ', () => {
    const value = omit(null, obj)
    expect(value).toEqual({})
  })

  it('should return empty object, if keys  and object passed like null ', () => {
    const value = omit(null, null)
    expect(value).toEqual({})
  })

  it('should return empty object, if keys passed like undefined and object is regular', () => {
    const value = omit(undefined , obj)
    expect(value).toEqual({})
  })

  it('should return empty object, if both, keys and object forwarded like undefined ', () => {
    const value = omit(undefined, undefined)
    expect(value).toEqual({})
  })

  it('should return empty object, if keys passed like number and  object is regular', () => {
    const value = omit(12345, obj)
    expect(value).toEqual({})
  })

  it('should return empty object, if both, keys and object forwarded like number ', () => {
    const value = omit(12345, 12345)
    expect(value).toEqual({})
  })

  it('should return empty object({}), if keys passed like empty string  and  object is regular', () => {
    const value = omit('', obj)
    expect(value).toEqual({})
  })

  it('should return empty object({}), if both, keys and object forwarded like empty string ', () => {
    const value = omit('', '')
    expect(value).toEqual({})
  })

  it('should return empty object({}), if keys passed like string  and  object is regular', () => {
    const value = omit('surname', obj)
    expect(value).toEqual({})
  })

  it('should return empty object({}), if both, keys and object forwarded like string', () => {
    const value = omit('string', 'string')
    expect(value).toEqual({})
  })

  it('should return forwarded object(obj), if keys passed like empty array  and  object is regular', () => {
    const value = omit([], obj)
    expect(value).toEqual({ name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' , gender: 'male' , age: 53 })
  })

  it('should return empty object({}), if both, keys and object forwarded like empty array', () => {
    const value = omit([], [])
    expect(value).toEqual({})
  })

  it('should return forwarded object(obj), if keys passed like empty array  and  object is regular', () => {
    const value = omit([], obj)
    expect(value).toEqual({ name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' , gender: 'male' , age: 53 })
  })

  it('should return empty object({}) without omited keys if keys string and  object is regular array', () => {
    const value = omit('surname', array)
    expect(value).toEqual({})
  })

  it('should return empty object({}) without omited keys , if keys  and  object is regular array', () => {
    const value = omit(['surname', 'address'], array)
    expect(value).toEqual({})
  })

  it('should return forwarded object(array) without omited keys , if keys Array and  object is regular object', () => {
    const value = omit(['name','surname'], obj)
    expect(value).toEqual({ address: 'T.V.L, 44, SM', age: 53, gender: 'male' })
  })

})
