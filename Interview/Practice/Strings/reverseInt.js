var reverse = function(x) {
  let y
  x = x.toString().split('')
  console.log(x)
  x = x.reverse()
  if (x[0] === '0') {
    x.shift()
  }
  if (x[x.length-1] === '-') {
    x.pop()
    x = x.join('')
    parseInt(x)
    x = -Math.abs(x)
    return x
  }
  x = x.join('')
  parseInt(x)
  return x
}

console.log(reverse(-120))
