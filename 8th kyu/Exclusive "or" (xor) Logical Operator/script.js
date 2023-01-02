// Solution

function xor(a, b) {
    // TODO: Program Me
    return a === false && b === false ? false : a === true && b === false ? true : a === false && b === true ? true : a === true && b === true ? false : false
  }