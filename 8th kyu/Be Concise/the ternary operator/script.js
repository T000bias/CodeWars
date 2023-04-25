// Solution
// TODO: Refactor and shorten the function

function describeAge(a) {
    let b = ["You're a(n) ", "kid", "teenager", "adult", "elderly"]
    return a<=12?b[0]+b[1]:a<=17?b[0]+b[2]:a>=18&&a<=64?b[0]+b[3]:b[0]+b[4] 
  }