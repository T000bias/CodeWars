// Solution

function solution(a, b){
    // your code here
    if (a.length < b.length) {
      return a + b + a
    } else {
      return b + a + b
    }
  }