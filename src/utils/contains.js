import isEmpty from 'utils/isEmpty'
import isString from 'utils/isString'
import isArray from 'utils/isArray'

export default (item, subItem, ignoreCase = false) => {
  if (isEmpty(item)) {
    return false
  }

  if (isString(item) && isString(subItem)) {
    if (ignoreCase) {
      return item.toLowerCase().indexOf(subItem.toLowerCase()) > -1
    }
    return item.indexOf(subItem) > -1
  }

  if (isArray(item)) {
    return item.indexOf(subItem) > -1
  }
  return false
}
