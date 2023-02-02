// Solution
function sumEvenNumbers(input) {
    // [...]
    let sum = 0
    let even = input.filter(function(number) {
      return number % 2 === 0
    })
    console.log(even)
    for (let number of even) {
      sum += number
    }
    return sum
  }