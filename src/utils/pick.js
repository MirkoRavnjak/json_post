function pick(keys, obj) {
  if (!keys?.length) {
    return {}
  }

  return keys.reduce((retVal, key) => {
    if (key in obj) {
      retVal[key] = obj[key]
    }
    return retVal
  }, {})
}

export default pick
