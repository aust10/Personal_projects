// var rotate = function(nums, k) {
//   const arr = []

//   let current = nums[k+1]
//   for (let i = 0; i < nums.length; i++) {
//     arr.push(current)
//     current = nums[current] ? nums[current] : nums[0]
//   }
//   return arr
// }

// console.log(rotate([1,2,3,4,5,6,7], k = 3))

var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    let y = nums.pop()
    nums.unshift(y)
  }
}

console.log(rotate([-1,-100,3,99],2))