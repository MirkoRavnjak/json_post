import isObject from './isObject'

export default function(target, ...rest) {

  if ( !isObject(target)) {

    target = {}

  }

  rest = rest.filter((item) => isObject(item))

  for (let i = 0; i < rest.length; i++) {
    const source = rest[i]
    for (const key in source) {
      target[key] = source[key]
    }
  }
  return target
}
