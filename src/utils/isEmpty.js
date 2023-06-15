
export default (value) => {

  if (typeof value === 'boolean') {
    return false
  }

  if (!value) {
    return true
  }
  if (Array.isArray(value) || typeof value === 'string') {
    return !value.length
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  }

  if (typeof value === 'function') {
    return false
  }

  return false
}
