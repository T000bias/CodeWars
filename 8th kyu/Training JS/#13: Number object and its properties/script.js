// Solution
function whatNumberIsIt(n){
    //coding here
    if (Number.isNaN(n)) {
      return `Input number is Number.NaN`
    }
    if (Number(n) === Number.POSITIVE_INFINITY) {
      return `Input number is Number.POSITIVE_INFINITY`
    }
    if (Number(n) === Number.NEGATIVE_INFINITY) {
      return `Input number is Number.NEGATIVE_INFINITY`
    }
    if (Number(n) >= Number.MAX_VALUE) {
      return `Input number is Number.MAX_VALUE`
    }
    if (Number(n) <= Number.MIN_VALUE) {
      return `Input number is Number.MIN_VALUE`
    }
    if (Number(n) > 0) {
      return `Input number is ${n}`
    }
    if (Number(n) === 0) {
      return `Input number is 0`
    }
  }