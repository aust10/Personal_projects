function remove (letter) {
  const items = {}
  let num = ''

  for (let i = 0; i < letter.length; i++) {
    const current = letter[i]
    if (items[current]) {
      items[current]++
    } else {
      items[current] = 1
    }
  }

  const values = Object.values(items)
  const keys = Object.keys(items)

  for (let i = 0; i < keys.length; i++) {
    num += keys[i] + values[i]
  }

  return num
}

console.log(remove('AABBCCC'))

