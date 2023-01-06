// Solution
function getNumberFromString(s) {
    let regex = /[0-9]/ig;
    let string = s.match(regex).join('')
    return Number(string)
  }