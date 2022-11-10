// FizzBuzz Solution
// Return an array
function fizzbuzz(n)
{
  //
  let arr = [];
  for (let i = 1; i <= n; i++) {
//     console.log(i)
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(arr.push('FizzBuzz'))
    } else if (i % 3 == 0) {
      console.log(arr.push('Fizz'))
    } else if (i % 5 == 0) {
      console.log(arr.push('Buzz'))
    } else {
      console.log(arr.push(i))
    }
  }
  return arr
}