import isString from './isString'

export default (str) => {

  if (!isString(str)){
    return ''
  }
  str = str.trim()

  return str.toLowerCase().replace(/ /g, '_')
}
