import isNumber from './isNumber'

export default (size) => {

  if (!isNumber(size) || size <= 0) {
    return []
  }

  return [...Array(size).keys()].map(i => i)

}
