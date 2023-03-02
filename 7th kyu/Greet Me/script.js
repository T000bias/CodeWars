// Solution
var greet = function(name) {
    let [a,...end] = name
    console.log(end.join(''))
    return `Hello ${(a.toUpperCase() + end.join('').toLowerCase())}!`
  //   return `Hello ${(a.toUpperCase() + end.toLowerCase()).join('')}`
  };