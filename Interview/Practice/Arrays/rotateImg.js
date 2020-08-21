// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
  matrix = matrix.reverse()
  for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < row; col++) {
          [matrix[row][col], matrix[col][row]] = [matrix[col][row], matrix[row][col]]
      }
  }
}