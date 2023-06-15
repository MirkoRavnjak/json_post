import isEmpty from 'utils/isEmpty'

export default (user) => {
  if (isEmpty(user)) {
    return null
  }

  return user.name || user.email.split('@')[0]
}
