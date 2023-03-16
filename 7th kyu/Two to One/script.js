// Solution
function longest(s1, s2) {
    // your code
    let arr = []
    let fullArr = s1.concat(s2)
    for (let i = 0; i < fullArr.length; i++) {
      if (!arr.includes(fullArr[i]))
        arr.push(fullArr[i])
    }
    return arr.sort().join('')
    
  }