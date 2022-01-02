// Solution
function remainder(n, m){
    // Divide the larger argument by the smaller argument and return the remainder
    let result = 0
    if (n < m) {
      result = m % n
    } else {
      result = n % m
    }
    return result
  }
  