// var intersect = function (nums1, nums2) {
//   const hash = {}
//   const arr = []

//   nums2.forEach(num => {
//     hash[num] ? hash[num]++ : hash[num] = 1
//   })

//   for (let i = 0; i < nums1.length; i++) {
//     if (hash[nums1[i]] > 0) {
//       arr.push(nums1[i])
//       hash[nums1[i]]--
//     }
//   }
//   return arr
// }

// console.log(intersect(nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]))

function intersect (nums1, nums2) {
  const arr = []
  const hash = {}

  nums2.forEach(num => {
    hash[num] ? hash[num]++ : hash[num] = 1
    // console.log(hash)
  })

  for (let i = 0; i < nums1.length; i++) {
    if (hash[nums1[i]] > 0) {
      // console.log(nums1[i])
      arr.push(nums1[i])
      // console.log(hash)
      hash[nums1[i]]--
      // console.log(hash)
    }
  }
  return arr
}

console.log(intersect(nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]))

const players = [{ player1: 0 }, { player2: 0 }]
console.log(players)

players.map(player => {
  console.log(player)
})