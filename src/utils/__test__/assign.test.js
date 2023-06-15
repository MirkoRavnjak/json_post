import assign from 'utils/assign'

describe('Test utils-assigne', () => {
  let target = {}
  const attr1 = { name: 'Mirko', surname: 'Ravnjak' }
  const attr2 = { email: 'mirko@mirko.com', country: 'Serbia' }
  const attr3 = { age: 55 , address: 'T.V.L 44,SM' }

  it('should return target + all regular attributes, as a single object when target is passed empty and all attributes as no empty regular objects', () => {
    const value = assign(target,attr1,attr2,attr3)
    expect(value).toEqual({ 'address': 'T.V.L 44,SM', 'age': 55, 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko' } )
  })

  it('should return target + all regular attributes, as a single object if target and attributes passed as no empty regular objects', () => {
    target = { name: 'Milan', surname: 'Milanović' }
    const value = assign(target,attr1,attr2)
    expect(value).toEqual({ 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko' } )
  })

  it('should return empty object if passed target as undefined and attribute is regular object', () => {
    target = undefined
    const value = assign(target,attr1)
    expect(value).toEqual({ 'surname': 'Ravnjak', 'name': 'Mirko' })
  })

  it('should return empty object if passed target as null and attribute is regular object', () => {
    target = null
    const value = assign(target,attr1)
    expect(value).toEqual({ 'surname': 'Ravnjak', 'name': 'Mirko' })
  })

  it('should return empty object if passed target as boolean and attribute is regular object', () => {
    target = true
    const value = assign(target, attr1)
    expect(value).toEqual({ 'surname': 'Ravnjak', 'name': 'Mirko' })
  })

  it('should return empty object if passed target as string and attribute is regular object', () => {
    target = 'Mirko'
    const value = assign(target, attr1)
    expect(value).toEqual({ 'surname': 'Ravnjak', 'name': 'Mirko' })
  })

  it('should return empty object if passed target as Array and attribute is regular object', () => {
    target = ['Mirko', 'Maja', 'Damjan']
    const value = assign(target, attr1)
    expect(value).toEqual({ 'surname': 'Ravnjak', 'name': 'Mirko' })
  })

  it('should return target + all regular attributes as a single object, when passed target as no empty object and when one of attributs is undefined', () => {
    target = { name: 'Mirko', surname: 'Ravnjak' }
    const attr = undefined
    const value = assign(target,attr1, attr, attr2)
    expect(value).toEqual({ 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko', })
  })

  it('should return target + all regular attributes as a single object, when passed target as no empty object and when one of attributes is null', () => {
    target = { name: 'Mirko', surname: 'Ravnjak' }
    const attr = null
    const value = assign(target,attr1, attr, attr2)
    expect(value).toEqual({ 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko', })
  })

  it('should return target + all regular attributes as a single object, when passed target as no empty regular object and when one of attributes is boolean', () => {
    target = { name: 'Mirko', surname: 'Ravnjak' }
    const attr = true
    const value = assign(target,attr1, attr, attr2)
    expect(value).toEqual({ 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko', })
  })

  it('should return target + all regular attributes as a single object, when passed target as no empty regular object and when one of attributes is number', () => {
    target = { name: 'Mirko', surname: 'Ravnjak' }
    const attr = 1968
    const value = assign(target,attr1, attr, attr2)
    expect(value).toEqual({ 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko', })
  })

  it('should return target + all regular attributes as a single object, when passed target as no empty regular object and when one of attributes is string', () => {
    target = { name: 'Mirko', surname: 'Ravnjak' }
    const attr = 'Hello World'
    const value = assign(target,attr1, attr, attr2)
    expect(value).toEqual({ 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko', })
  })

  it('should return target + all regular attributes as a single object, when passed target as no empty regular object and when one of attributes is Array', () => {
    target = { name: 'Mirko', surname: 'Ravnjak' }
    const attr = [1968, 25, 'jan']
    const value = assign(target,attr1, attr, attr2)
    expect(value).toEqual({ 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko', })
  })

  it('should return target + all regular attributes as a single object, when passed target as no empty regular object and when one of attributes is {}', () => {
    target = { name: 'Mirko', surname: 'Ravnjak' }
    const attr = {}
    const value = assign(target,attr1, attr, attr2)
    expect(value).toEqual({ 'country': 'Serbia', 'email': 'mirko@mirko.com', 'surname': 'Ravnjak', 'name': 'Mirko', })
  })

  it('should return target  as a single object, when passed target as object and not passed any attribute', () => {
    target = { name: 'Mirko', surname: 'Ravnjak' }
    const value = assign(target)
    expect(value).toEqual({ 'surname': 'Ravnjak', 'name': 'Mirko', })
  })

})

