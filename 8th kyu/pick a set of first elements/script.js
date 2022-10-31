// Solution 1
function first(arr, n) {
    // return arr;
    return n == undefined ? arr.slice(0,1) : arr.slice(0,n)
  }

// Solution 2
function first2(arr, n) {
    // return arr;
    if (n == undefined) {
      return arr.slice(0,1)
    } else {
      return arr.slice(0,n)
    }
  }