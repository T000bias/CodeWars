// Solution
var Calculator = {
    average: function(...arr) {
     // Your code here... 
      if (arr.length === 0) {
        return 0
      }
      let divisor = 0
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        divisor++
      }
      return sum / divisor
    }
   };