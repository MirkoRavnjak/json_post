import get from 'utils/get'

describe('Test get', () => {
  const user = {
    id: 1,
    name: 'Mirko',
    author: {
      id: 2,
      posts: [{
        id: 3,
        title: 'post title'
      }]
    }
  }

  it('should return undefined if not valid path', () => {
    const value = get(user, 'author.age')
    expect(value).toBeUndefined()
  })

  it('should return value if path is array ', () => {
    const value = get(user, ['author','posts','0','title'])
    expect(value).toBe('post title' )

  })

  it('should return value if path is string ', () => {
    const value = get(user, 'author.posts[0].title')
    expect(value).toBe('post title')
  })
})
