import isEmpty from 'utils/isEmpty'

describe('Test isEmpty', () => {

  it('should value is true', () => {
    const value = isEmpty(true)
    expect(value).toBeFalsy()
  })

  it('should value is false', () => {
    const value = isEmpty(false)
    expect(value).toBe(false)
  })

  it('should value is empty', () => {
    const value = isEmpty()
    expect(value).toBeTruthy()
  })

  it('should value is array', () => {
    const value = isEmpty(['name', 'breed', '0', 'cat'])
    expect(value).toBeFalsy()
  })

  it('should value is a string ', () => {
    const value = isEmpty('name.breed[0].cat')
    expect(value).toBeFalsy()
  })

  it('should value is object', () => {
    const value = isEmpty({ id: 1, pet: 'dog', name: 'Tuft' })
    expect(value).toBeFalsy()
  })

  it('should value is a function', () => {
    const value = isEmpty((() => { }))
    expect(value).toBeFalsy()
  })

  it('should value is empty array', () => {
    const value = isEmpty([])
    expect(value).toBeTruthy()
  })

  it('should value is empty object', () => {
    const value = isEmpty({})
    expect(value).toBeTruthy()
  })

})
