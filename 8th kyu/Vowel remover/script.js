// Solution

function shortcut (string) {
    let vowelArr = ['a','e','i','o','u'];
    let arr = []
    for (let letter of string) {
      if (!vowelArr.includes(letter)) {
        arr.push(letter)
      }
    }
    return arr.join('')
  }