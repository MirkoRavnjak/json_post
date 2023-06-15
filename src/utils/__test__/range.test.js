import range from 'utils/range'

describe('test range', () => {

  const obj2 = { name: 'Marijana', surname: 'Ravnjak',address: 'T.V.L, 44, SM' }
  const obj3 = { name: 'Damjan', surname: 'Ravnjak',address: 'V.R.24 BP' }
  const obj4 = { name: 'Katarina', surname: 'Jovanovic', address: 'T.V.L, 44, SM' }

  const obj1 = { name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' }
  const arrayOfObjects = [obj1, obj2, obj3, obj4]
  const array = ['Abc', 'def', 'ghi', 'Abc', 'jkl','Abc', 'mno']

  it('should return [] if size  passed like null', () => {
    const value = range(null)
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like undefined', () => {
    const value = range(undefined)
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like empty string', () => {
    const value = range('')
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like "string"', () => {
    const value = range('string')
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like empty Array', () => {
    const value = range([])
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like regular Array', () => {
    const value = range(array)
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like empty object', () => {
    const value = range({})
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like regular object', () => {
    const value = range(obj1)
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like regular array of objects', () => {
    const value = range( arrayOfObjects)
    expect(value).toEqual([])
  })

  it('should return [] if size  passed like 0', () => {
    const value = range(0)
    expect(value).toEqual([])
  })

  it('should return array of size elements if size passed like number > 0', () => {
    const value = range(4)
    expect(value).toEqual([0,1,2,3])
  })

  it('should return [] if size  passed like 0', () => {
    const value = range(-4)
    expect(value).toEqual([])
  })

  it('should return [] if size passed like NaN', () =>{
    const value = range(NaN)
    expect(value).toEqual([])
  })

})

