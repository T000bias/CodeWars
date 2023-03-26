// Solution
function factorial(n) {
    // Calculate the factorial here
    if (n < 0 || n > 12) {
      throw new Error('Error')
    }
    
    let start = 1
    for (let i = n; i > 1; i--) {
      start *= i
    }
    return start
  }