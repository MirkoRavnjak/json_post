export default (val) => {
  const isnumber = (typeof (val) === 'number')
  if (isnumber && !isNaN(val)){
    return isnumber
  }
  return false
}
