// Solution
function sumStr(a,b) {
    let sum = 0;
    if (a == '' && b == '') {
      return '0'
    } else if (a == '') {
      sum = b
    } else if (b == '') {
      sum = a
    } else {
      sum = String(parseInt(a) + parseInt(b))
    }
    return sum
  }