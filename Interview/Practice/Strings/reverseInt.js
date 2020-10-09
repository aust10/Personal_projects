var reverse = function (x) {
  const max = Math.pow(2, 31)
  console.log(max)
  x = x.toString().split('')
  console.log(x)
  x = x.reverse()
  if (x[0] === '0') {
    x.shift()
  }
  if (x[x.length - 1] === '-') {
    x.pop()
    x = x.join('')
    parseInt(x)
    x = -Math.abs(x)
    if (x < -max) {
      x = 0
      return x
    } else {
      return x
    }
  }
  x = x.join('')
  parseInt(x)

  if (x > max) {
    const x = 0
    return x
  } else {
    return x
  }
}

console.log(reverse(-2147483648))

console.log(Math.pow(2, 31))
