import isArray from './isArray'

export default (array, separator = '') => {
  if (!isArray(array)) {
    return null
  }
  return array.join(separator)
}
