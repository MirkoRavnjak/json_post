import equal from 'utils/equal'

describe('Teat equal', () => {

  it('should a ===  b when they are a number', () => {
    const a = 2
    const b = 2
    const value = equal(a, b)
    expect(value).toBeTruthy()
  })

  it('should not a ===  b when they are a number', () => {
    const a = 2
    const b = 3
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should a === b when they are a string', () => {
    const a = 'a'
    const b = 'a'
    const value = equal(a, b)
    expect(value).toBeTruthy()
  })

  it('should not a === b when they are a string', () => {
    const a = 'a'
    const b = 'b'
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should a === b when they are undefine', () => {
    const a = undefined
    const b = undefined
    const value = equal(a, b)
    expect(value).toBeTruthy()
  })

  it('should not a === b when is one undefine', () => {
    const a = undefined
    const b = 'b'
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should a === b when are both true', () => {
    const a = true
    const b = true
    const value = equal(a, b)
    expect(value).toBeTruthy()
  })

  it('should not a === b when is one true and another is false', () => {
    const a = true
    const b = false
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should a === b when are both false', () => {
    const a = false
    const b = false
    const value = equal(a, b)
    expect(value).toBeTruthy()
  })

  it('should a === b when are both object', () => {
    const a = { id: 1, name: 'Mirko', age: 55 }
    const b = { id: 1, name: 'Mirko', age: 55 }
    const value = equal(a, b)
    expect(value).toBeTruthy()
  })

  it('should a === b when are diffrent object', () => {
    const a = { id: 1, name: 'Mirko', age: 55 }
    const b = { id: 2, name: 'Damjan', age: 30 }
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should not a === b when is one object and another is difrent type', () => {
    const a = { id: 1, name: 'Mirko', age: 55 }
    const b = false
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should  a === b when are both array', () => {
    const a = ['name', 'breed', '0', 'cat']
    const b = ['name', 'breed', '0', 'cat']
    const value = equal(a, b)
    expect(value).toBeTruthy()

  })

  it('should not a === b when are both  different array', () => {
    const a = ['name', 'breed', '0', 'cat']
    const b = ['author', 'posts', '0', 'title']
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should not a === b when is one array and another is difrent type', () => {
    const a = ['name', 'breed', '0', 'cat']
    const b = 'b'
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should a === b when are both null', () => {
    const a = null
    const b = null
    const value = equal(a, b)
    expect(value).toBeTruthy()
  })

  it('should not a === b when is one null and another is different  type', () => {
    const a = null
    const b = 'b'
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

  it('should not a === b when is one NaN and another is different type', () => {
    const a = NaN
    const b = 'b'
    const value = equal(a, b)
    expect(value).toBeFalsy()
  })

})
