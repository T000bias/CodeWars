// Solution
function sum(...a) {
    // return the sum of all arguments given.
    let sum = 0
    for (let i = 0; i < a.length; i++) {
      sum += a[i]
    }
    return sum
  }