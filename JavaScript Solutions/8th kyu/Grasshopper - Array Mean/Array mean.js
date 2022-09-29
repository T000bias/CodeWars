// Solution

var findAverage = function (nums) {
  // Code here
  let numerator = 0;
  let denominator = 0;
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    numerator += nums[i]
    denominator += 1
    console.log(denominator)
    console.log(numerator)
  }
  return total = numerator / denominator  
}