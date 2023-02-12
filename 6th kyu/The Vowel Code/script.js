// Solution

function encode(string) {
    let newStr = ''
    for (let i = 0; i < string.length; i++) {
      if (string[i] === 'a') {
        newStr += '1'
      } else if (string[i] === 'e') {
        newStr += '2'
      } else if (string[i] === 'i') {
        newStr += '3'
      } else if (string[i] === 'o') {
        newStr += '4'
      } else if (string[i] === 'u') {
        newStr += '5'
      } else {
        newStr += string[i]
      }
    }
    return newStr
  }
  
  function decode(string) {
    let newStr = ''
    for (let i = 0; i < string.length; i++) {
     if (string[i] === '1') {
        newStr += 'a'
      } else if (string[i] === '2') {
        newStr += 'e'
      } else if (string[i] === '3') {
        newStr += 'i'
      } else if (string[i] === '4') {
        newStr += 'o'
      } else if (string[i] === '5') {
        newStr += 'u'
      } else {
        newStr += string[i]
      }
      }
    return newStr
  }