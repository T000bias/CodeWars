// Squares Sequence Code
function squares(x, n) {
    let square = x;
    let sqrArr = [];
    for (let i = 0; i < n; i++) {
      sqrArr.push(x)
      console.log(sqrArr)
      x *= x
    }
    return sqrArr
  }