// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


//My Solution
function positiveSum(arr) {
    arr = arr.filter(function(x) { return x >-1})
  //   console.log(arr)
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i])
      total = total + arr[i]
      console.log(total)
    }
    return arr = total
  }