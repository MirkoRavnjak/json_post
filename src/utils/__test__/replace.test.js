import replace from 'utils/replace'

describe('Test replace', () => {
  const str = 'Hello World Hello'

  it('should return replace string when find substring', () => {
    const findEl = 'el'
    const replaceWith = '-'
    const value = replace(str,findEl,replaceWith)
    expect(value).toBe('H-lo World H-lo')
  })

  it('should not return replace string when do not find substring', () => {
    const findEl = 'is'
    const replaceWith = '-'
    const value = replace(str,findEl,replaceWith)
    expect(value).toBe('Hello World Hello')
  })

})
