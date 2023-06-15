import contains from 'utils/contains'

describe('Test utils-contains', () => {
  let item = 'Hello World Hello 12345 true People'
  let itemArray = ['Hello', 'World', 'Hello', 12345, true, 'People']
  const subItem = 'Hello'
  const ignoreCase = true
  const num = 12345
  const obj = { name: 'Mirko', surName: 'Ravnjak' }

  it('should return false if item be passed like empty', () => {
    const value = contains()
    expect(value).toBeFalsy()
  })

  it('should return false if item be passed like "undefined"', () => {
    const value = contains(undefined)
    expect(value).toBeFalsy()
  })

  it('should return false if item be passed like "null"', () => {
    const value = contains(null)
    expect(value).toBeFalsy()
  })

  it('should return false if item be passed like empty string', () => {
    const value = contains('')
    expect(value).toBeFalsy( )
  })

  it('should return false if item be passed like empty array', () => {
    const value = contains([])
    expect(value).toBeFalsy( )
  })

  it('should return false if item be passed like array', () => {
    const value = contains(itemArray)
    expect(value).toBeFalsy( )
  })

  it('should return false if item be passed like empty object', () => {
    const value = contains({})
    expect(value).toBeFalsy()
  })

  it('should return false if item be passed like object', () => {
    const value = contains(obj)
    expect(value).toBeFalsy()
  })

  it('should return false if item be passed like number', () => {
    const value = contains(num)
    expect(value).toBeFalsy()
  })

  it('should return false if item be passed like string and subItem not pased', () => {
    const value = contains(item)
    expect(value).toBeFalsy()
  })

  it('should return true if ignoreCase not passed and item contains subItem and they both are string', () => {
    const value = contains(item, subItem)
    expect(value).toBeTruthy()
  })

  it('should return false if ignoreCase truthy and item not contains subItem and they both are string', () => {
    const value = contains(item, 'unexising', ignoreCase)
    expect(value).toBeFalsy()
  })

  it('should return false if ignoreCase not passed and item contains subItem and they both are string with diferent first letter', () => {
    const value = contains(item, 'world')
    expect(value).toBeFalsy()
  })

  it('should return true if ignoreCase is truthy and item contains subItem and ignore Uper or lower case of string ' , () => {
    const value = contains(item, 'world', ignoreCase)
    expect(value).toBeTruthy()
  })

  it('should return false if ignoreCase not passed and item contains subItem but is subItem they are num', () => {
    const value = contains(item, num)
    expect(value).toBeFalsy()
  })

  it('should return false if ignoreCase not passed and item contains subItem but subItem they are boolean', () => {
    const value = contains(item, true)
    expect(value).toBeFalsy()
  })

  it('should return false if ignoreCase not passed and item contains subItem but subItem they are Array' , () => {
    const value = contains(item, itemArray )
    expect(value).toBeFalsy()
  })

  it('should return false if ignoreCase not passed and item passed like Array and not passed subItem' , () => {
    const value = contains(itemArray)
    expect(value).toBeFalsy()
  })

  it('should return true if ignoreCase is not passed and the itemArray contains exactly that subItem ' , () => {
    const value = contains(itemArray, subItem )
    expect(value).toBeTruthy()
  })

  it('should return false if ignoreCase is not passed and the itemArray contains subItem with diferent (Uper or lower) string  ' , () => {
    const value = contains(itemArray, 'world' )
    expect(value).toBeFalsy()
  })

  it('should return false if ignoreCase is true and the itemArray contains subItem with diferent (Uper or lower) string  ' , () => {
    const value = contains(itemArray, 'world', ignoreCase )
    expect(value).toBeFalsy()
  })

  it('should return true if ignoreCase is not passed and the itemArray contains subItem when thath is number' , () => {
    const value = contains(itemArray, 12345 )
    expect(value).toBeTruthy()
  })

  it('should return true if ignoreCase is not passed and the itemArray contains subItem when thath is boolean' , () => {
    const value = contains(itemArray, true )
    expect(value).toBeTruthy()
  })

})
