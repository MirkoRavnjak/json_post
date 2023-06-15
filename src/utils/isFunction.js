
export default (value) => {

  if (!value) {
    return false
  }

  return value instanceof Function

}
