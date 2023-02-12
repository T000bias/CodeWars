// Solution

function disemvowel(str) {
    let vowelRegex = /[aeiou]/gi
    return str.replace(vowelRegex,'');
  }