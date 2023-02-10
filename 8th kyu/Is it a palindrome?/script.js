// Solution
function isPalindrome(x) {
  // your code here
  let reversed = x.toLowerCase().split('').reverse().join('')
  console.log(reversed,x)
  return x.toLowerCase() === reversed
}