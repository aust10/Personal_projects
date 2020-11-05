var longestCommonPrefix = function (strs) {
  const readout = strs[0]
  let loggout = ''
  if (strs.length === 0) {
    return loggout
  }
  if (strs.length === 1) {
    return strs[0]
  }

  for (let i = 0; i < strs[0].length; i++) {
    const current = strs[0][i]
    // console.log(current, 'curr')
    for (let j = 1; j < strs.length; j++) {
      // console.log(readout.indexOf(readout[i]), readout[i])
      if (current === strs[j][i] && j === strs.length - 1) {
        loggout += current
      } else {
        if (current !== strs[i][j]) {
          return loggout
        }
      }
    }
    return loggout
  }
  return loggout
  // console.log(tell, 'tell check')
}

console.log(longestCommonPrefix(['aflower', 'bflow', 'cflight'])) // should return fl
console.log(longestCommonPrefix(['a'])) // should return a
console.log(longestCommonPrefix(['cir', 'car'])) // should return c
console.log(longestCommonPrefix(['reflower', 'flow', 'flight'])) // should return ''
console.log(longestCommonPrefix(['flower', 'fkow'])) // should return f


// this works on leet code but not my oporating system


// let result = ''

// if (strs.length > 0) {
//   const [pivot, ...str] = strs

//   for (let int = 0; int < pivot.length; int++) {
//     if (str.length > 0) {
//       for (let int2 = 0; int2 < str.length; int2++) {
//         if (pivot[int] !== str[int2][int]) {
//           result = pivot.substring(0, int)
//           int = pivot.length
//           break
//         } else if (int2 === (str.length - 1)) {
//           result = pivot
//         }
//       }
//     } else {
//       result = pivot
//     }
//   }
// }

// return result