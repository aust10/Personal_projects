function check (stuff) {
  const items = {}
  let value = ''
  for (let i = 0; i < stuff.length; i++) {
    if (items[stuff[i]]) {
      items[stuff[i]]++
    } else {
      items[stuff[i]] = 1
    }
  }
  console.log(items)
  const keys = Object.keys(items)
  const values = Object.values(items)

  for (let j = 0; j < keys.length; j++) {
    if (values[j] !== 1) {
      value = keys[j]
    }
  }
  if (value === '') {
    return 'all letters are unique'
  } else {
    return value
  }
}

console.log(check('jimbob'))
