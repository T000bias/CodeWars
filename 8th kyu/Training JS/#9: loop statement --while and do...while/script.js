// Solution
function padIt(str,n){
    //coding here
    let string = str
    while (n > 0) {
      if(n % 2 === 0) {
        string = string + "*"
      } else {
        string = "*" + string
      }
      n--
    }
    return string
  }