import isArray from './isArray'
import isEmpty from './isEmpty'

export default (value) => {
  if (isEmpty(value)) {

    return false
  }
  return typeof value === 'object' && !isArray(value)
}

