var myAtoi = function (s) {
  // console.log(parseInt(s))
  // const change = s.replace(/(\d+)/, '')
  const numbers = s.match(/-(\d+)/)
  console.log(numbers[0])
}

myAtoi('abc -54')
