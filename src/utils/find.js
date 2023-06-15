export default (list, condition, first) => {

  let retValObj = null
  const retValList = []

  list?.some?.((item) => {
    const keys = Object.keys(condition)

    let missing = false
    keys.some((key) => {
      if (item[key] !== condition[key]) {
        missing = true
        return false
      }
    })

    if (!missing) {
      if (first) {
        retValObj = item
        return true
      }
      retValList.push(item)
    }
  })
  return first ? retValObj : retValList
}
