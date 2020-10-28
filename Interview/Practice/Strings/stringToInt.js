var myAtoi = function (s) {
  // console.log(parseInt(s))
  // const change = s.replace(/(\d+)/, '')
  // const numbers = s.match(/-(\d+)/)
  // console.log(numbers.length)
  const change = s.split(' ')
  console.log(change)
  for (let i = 0; i < change.length; i++) {
    if (parseInt(change[i])) {
      if (change[i] )
      return change[i]
    }
  }
}

console.log(myAtoi("   -42"))
