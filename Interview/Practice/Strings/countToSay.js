var countAndSay = function (n) {
  // console.log(n)
  const items = {
    1: '1'
  }
  if (n === 1) return '1'
  for (let i = 2; i <= n; i++) {
    let count = 0
    let current
    let readout = ''
    for (let j = 0; j < items[i - 1].length; j++) {
      current = items[i - 1][j]
      if (j === 0 || current === items[i - 1][j - 1]) count++
      else {
        readout += `${count}${items[i - 1][j - 1]}`
        count = 1
      }
    }
    readout += `${count}${current}`
    items[i] = readout
  }
  return items[n]
}

console.log(countAndSay('4'))
