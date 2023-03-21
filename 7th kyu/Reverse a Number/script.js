// Solution
function reverseNumber(n) {
    // ...
    if (n < 0) {
      let str = parseInt(String(n).split('').reverse().join(''))
      return -str
    } else {
      return parseInt(String(n).split('').reverse().join(''))
    }
  }