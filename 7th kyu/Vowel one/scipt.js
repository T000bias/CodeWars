// Solution

function vowelOne(s){
    // ...
    let str = ''
    let change = s.toLowerCase().split('')
    console.log(change)
    for (let i = 0; i < change.length; i++) {
      if (change[i] === 'a') {
        str = str + '1'
      } else if (change[i] === 'e') {
        str = str + '1'
      } else if (change[i] === 'i') {
        str = str + '1'
      } else if (change[i] === 'o') {
        str = str + '1'
      } else if (change[i] === 'u') {
        str = str + '1'  
      }else {
        str = str + '0'
      }
      
    }
   console.log(str)
    return str
  }