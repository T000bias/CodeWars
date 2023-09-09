// Solution
function betweenExtremes(numbers) {
    //write your code here
  let order = numbers.sort(function(a,b) {
    return a - b
  })
  return Math.max(...order) - Math.min(...order)
}