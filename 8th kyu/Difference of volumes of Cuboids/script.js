// Solution
function findDifference(a, b) {
    //loading...
    let diff = 0, sumA = 1, sumB = 1;
    for (let i = 0; i < a.length; i++) {
  //     console.log(a[i])
      sumA *= a[i]
      sumB *= b[i]
      diff = sumA - sumB
      if (diff < 0) {
        diff *= -1
      }
      console.log(sumA, sumB)
  //     console.log(b[i])
    }
    return diff
  }