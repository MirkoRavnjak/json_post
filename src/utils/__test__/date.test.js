import date from 'utils/date'

describe('Test date', () => {
  const testDate = 1572393600000

  it('should  show date', () => {
    const value = date.format(testDate)
    expect(value).toBe('Wed, 10/30/2019, 24:00')
  })

  it('should return true if it is short', () => {
    const value = date.format(testDate, true)
    expect(value).toStrictEqual({ 'day': '30', 'month': 'Oct' })
  })

  it('should return short month name', () => {
    const value = date.getMonthName(12)
    expect(value).toBe('Dec')
  })

})

