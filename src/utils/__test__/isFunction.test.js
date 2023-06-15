import isFunction from 'utils/isFunction'

describe('Describe isFunction.test',() => {

  const testFunction = () => {}

  it('Should return false if in isFunction be passed null', () => {
    const value = isFunction(null)
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed undefined', () => {
    const value = isFunction(undefined)
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed NaN', () => {
    const value = isFunction(NaN)
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed number', () => {
    const value = isFunction(1234567890)
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed empty string-"" ', () => {
    const value = isFunction('')
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed regular string ', () => {
    const value = isFunction('test')
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed empty array-[] ', () => {
    const value = isFunction([])
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed regular array ', () => {
    const value = isFunction(['this is', 'test array', 12345 , null, undefined])
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed empty object', () => {
    const value = isFunction({})
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed regular object', () => {
    const value = isFunction( { name: 'Mirko', surname: 'Ravnjak',address: 'T.V.L, 44, SM' })
    expect(value).toBeFalsy()
  })

  it('Should return false if in isFunction be passed regular function', () => {
    const value = isFunction(testFunction)
    expect(value).toBeTruthy()
  })
})
