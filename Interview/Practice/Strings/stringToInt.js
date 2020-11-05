const ASCII_INT_MIN = 48
const ASCII_INT_MAX = 57
const ASCII_WHITESPACE = 32
const ASCII_PLUS = 43
const ASCII_MINUS = 45
const INT32_MIN = (-2) ** 31
const INT32_MAX = 2 ** 31 - 1

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let result = 0
  let sign = 1
  const sLength = s.length

  // Flag to raise when we have reached integers.
  let ri = false

  for (let i = 0; i < sLength; i++) {
    const code = s.charCodeAt(i)

    // First phase, receiving whitespace or sign.
    if (!ri) {
      if (code === ASCII_WHITESPACE) continue
      if (code === ASCII_MINUS) {
        sign = -1
        ri = true
        continue
      } else if (code === ASCII_PLUS) {
        sign = 1
        ri = true
        continue
      }
    }

    if (code < ASCII_INT_MIN || code > ASCII_INT_MAX) {
      // Non-numeric character, end here.
      break
    }

    // Got digit without any leading sign, set phase flag.
    if (!ri) {
      ri = true
    }

    // Build the result integer one digit at a time.
    const digit = code - ASCII_INT_MIN
    result = result * 10 + digit
  }

  // Set the integer sign by multiplying with 1 or -1.
  const resultSigned = result * sign

  // Truncate the result to 32bit range.
  return resultSigned > 0 ? Math.min(resultSigned, INT32_MAX) : Math.max(resultSigned, INT32_MIN)
}
console.log(myAtoi('   -42'))
