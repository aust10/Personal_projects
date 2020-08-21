// input: "AABBCCC" 	
// Output: "A2B2C3"

// input: "AABBCCCVVVVVCCC" 
// Output: "A2B2C3V5C3" 

function remove (letters) {
  // take in a string and split the letters to get an array
  const x = letters.split('')
  // set the counter to a string to get concated together at the end
  let counter = ''

  // loop though the arr
  for (let i = 0; i < x.length; i++) {
    // each letter starts at 1
    let count = 1
    // store the current value or variable 
    let current = x[i]
    // while i is less than the lenth -1 and the current letter is equal to the next letter add one to the count and keep moving right in the arr 
    while(i<x.length-1 && x[i] === x[i+1]) { 
      count++
      i++
    }
    // concat the current and the count together
    counter += current + count
  }
  return counter
}
