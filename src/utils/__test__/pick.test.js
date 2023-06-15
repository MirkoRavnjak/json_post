import pick from 'utils/pick'

describe('Test pick', () => {
  const peoplePick = { name: 'John', age: 27, gender: 'male' }

  it('should return empty object if keys are empty', () => {
    const keys = []
    const value = pick(keys, peoplePick)
    expect(value).toEqual({})
  })

  it('should return empty object if keys are undefined', () => {
    const keys = undefined
    const value = pick(keys, peoplePick)
    expect(value).toEqual({})
  })

  it('should return empty object if keys are null', () => {
    const keys = null
    const value = pick(keys, peoplePick)
    expect(value).toEqual({})
  })

  it('should return empty object if object is empty', () => {
    const keys = [1]
    const people = {}
    const value = pick(keys, people)
    expect(value).toEqual({})
  })

  it('should return empty object if object is undefined', () => {
    const value = pick(undefined, undefined)
    expect(value).toEqual({})
  })

  it('should return object with provided keys in list', () => {
    const keys = ['name', 'age']
    const value = pick(keys, peoplePick)
    expect(value).toStrictEqual({ 'name': 'John', 'age': 27 })
  })

  it('should return empty object if provided keys are not in object', () => {
    const keys = ['surname']
    const value = pick(keys, peoplePick)
    expect(value).toStrictEqual({})
  })
})
