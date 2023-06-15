import userName from 'utils/userName'

describe('Test userName', () => {

  it('should return null if user is empty', () => {
    const user = {}
    const value = userName(user)
    expect(value).toBeNull()
  })

  it('should  return name if user.name  exists', () => {
    const user = { id: 1, name: 'John', email: 'john@john' }
    const value = userName(user)
    expect(value).toBe('John')
  })

  it('should  return email if user.name is empty', () => {
    const user = { id: 1, email: 'john@john' }
    const value = userName(user)
    expect(value).toBe('john')
  })
})
