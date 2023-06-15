import isArray from './isArray'
import isObject from './isObject'

function omit(keys, obj) {

  if (!isArray(keys) || !isObject(obj)) {
    return {}
  }

  if (!keys?.length) {
    return obj
  }

  // eslint-disable-next-line no-unused-vars
  const { [keys.pop()]: omitted, ...rest } = obj

  return omit(keys, rest)
}

export default omit
