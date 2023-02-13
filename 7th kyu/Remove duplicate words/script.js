// Solution
function removeDuplicateWords (s) {
    // your perfect code...
    let spread = s.split(' ')
    let string = ''
    let arr = []
    for (let i = 0; i < spread.length; i++) {
      if (!arr.includes(spread[i])) {
        arr.push(spread[i])
      }
    }
    for (let word of arr) {
      string += word + " "
    }
    return string.trim()
  }