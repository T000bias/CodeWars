// Solution

function doubleChar(str) {
    // Your code here
    let conversion = str.split('')
    let conversion2 = ''
    for (let i = 0; i < conversion.length; i++) {
      conversion2 += conversion[i] + conversion[i]
    }
    return conversion2
  }