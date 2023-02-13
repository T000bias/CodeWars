// Solution

function makeString(s){
    // ...
    let str = s.split(' ')
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
      newStr += (str[i][0])
    }
    return (newStr)
  }