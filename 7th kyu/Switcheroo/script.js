// Solution
function switcheroo(x){
    let str = ''
    for (let i = 0; i < x.length; i++) {
      if (x[i].toLowerCase() === 'a') {
        str += 'b'
      } else if (x[i].toLowerCase() === 'b') {
        str += 'a'
      } else {
        str += x[i]
      }
    }
    return str
  }