// Solution

function reverse(string){
    //your code here
    let str = ''
    let size = string.split(' ')
    for (let i = size.length - 1; i >= 0; i--) {
  //       console.log(string[i])
        str += size[i] + ' '
      
      }
    return str.trim()
  }