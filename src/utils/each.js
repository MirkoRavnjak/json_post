import isEmpty from 'utils/isEmpty'
import isArray from 'utils/isArray'
import isObject from 'utils/isObject'

export default (iterate, callback) => {
  if (!isEmpty(iterate)) {
    if (isArray(iterate)) {
      return iterate.map(callback)
    }
    if (isObject(iterate)) {
      const keys = Object.keys(iterate)
      return keys.map((key, index) => {
        return callback(iterate[key], key, index)
      })
    }
  }
}
