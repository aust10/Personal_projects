var isPalindrome = function (s) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g

  let check = s.replace(regex, '')
  check = check.replace(/\s/g, '')

  let change = s.replace(regex, '')
  change = change.replace(/\s/g, '')
  change = change.split('')
  change = change.reverse()
  change = change.join('')

  if (check.toLowerCase() === change.toLowerCase()) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))
