import capitalize from 'utils/capitalize'

describe('Test capitalize', () => {

  it('should capitalize one word', () => {
    const value = capitalize('word')
    expect(value).toBe('Word')
  })
  it('should capitalize sentance', () => {
    const value = capitalize('hello world')
    expect(value).toBe('Hello World')
  })
  it('should uppercase only first char and lowercase rest', () => {
    const value = capitalize('hELLO')
    expect(value).toBe('Hello')
  })
})
