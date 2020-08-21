
// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

var removeDuplicates = function (nums) {
  let current = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[current] !== nums[i]) {
      current++
      nums[current] = nums[i]
    }
  }
  return current + 1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))