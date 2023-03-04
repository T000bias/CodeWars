// Solution
function sumOfMinimums(arr) {
    // your code here
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
      console.log(arr[i])
      sum += Math.min.apply(Math, arr[i])
      }
    return sum
  }