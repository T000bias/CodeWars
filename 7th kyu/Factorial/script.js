// Solution
function factorial(n){
    //your code here
    let sum = 1
    if (n <= 1) {
      return 1
    }
    
    for (let i = n; i > 1; i--) {
      sum *= i
    }
    
    return sum
  }