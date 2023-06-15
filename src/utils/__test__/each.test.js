import each from 'utils/each'

describe('Test utils-each', () => {

  const iterateObject = { name: 'Mirko' , surName: 'Ravnjak', gender: 55 }

  const mockCallback = jest.fn(() => {})
  const mockCallback1 = jest.fn(() => {true})

  it('should return 0 call mockCallback when iterate is nummber' , () => {
    each(1234567890, mockCallback)
    expect(mockCallback).toBeCalledTimes(0)
  })

  it('should return 0 call mockCallback when iterate is empty string' , () => {
    each('', mockCallback)
    expect(mockCallback).toBeCalledTimes(0)
  })

  it('should return 0 call mockCallback when iterate is regular string' , () => {
    each('This is a control string', mockCallback)
    expect(mockCallback).toBeCalledTimes(0)
  })

  it('should return 0 call mockCallback when iterate is undefined' , () => {
    each(undefined, mockCallback)
    expect(mockCallback).toBeCalledTimes(0)
  })

  it('should return 0 call mockCallback when iterate is null' , () => {
    each(null, mockCallback)
    expect(mockCallback).toBeCalledTimes(0)
  })

  it('should return 0 call mockCallback when iterate is NaN' , () => {
    each(NaN, mockCallback)
    expect(mockCallback).toBeCalledTimes(0)
  })

  it('should return 0 of call when iterate is empty Array' , () => {
    each([], mockCallback)
    expect(mockCallback).toBeCalledTimes(0)
  })

  it('should return 0 call mockCallback when iterate is empty object' , () => {
    each({}, mockCallback)
    expect(mockCallback).toBeCalledTimes(0)
  })

  it('should return 6 of call mockCallback when iterate is regularArray with 6 a different type elements' , () => {
    each(['Hello', null, undefined, iterateObject, 12345, NaN], mockCallback)
    expect(mockCallback).toBeCalledTimes(6)
  })

  it('should return 3 of call mockCallback when iterate is regular Object with 3 pair - key: value' , () => {
    each(iterateObject, mockCallback1)
    expect(mockCallback1).toBeCalledTimes(3)
  })

})
