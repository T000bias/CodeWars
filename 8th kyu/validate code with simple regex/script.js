// Solution

function validateCode (code) {
    //your code here
      let spread = String(code).split('')
      if (spread[0] === '1' || spread[0] === '2' || spread[0] === '3') {
        return true
      } else {
        return false
      }
    }