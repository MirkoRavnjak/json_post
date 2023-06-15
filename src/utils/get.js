import isArray from './isArray'

export default (object, path, defaultValue = undefined) => {
  let paths
  if (isArray(path)) {
    paths = path
  } else {
    paths = String(path)
      .replace(/\[/g, '.')
      .replace(/]/g, '')
      .split('.')
  }
  let retVal = undefined
  let currObj = object
  try {
    paths.forEach(function(level) {

      retVal = currObj[level]
      currObj = currObj[level]
    })
  } catch {
    retVal = undefined
  }

  if (retVal === undefined) {
    return defaultValue
  }

  return retVal
}
