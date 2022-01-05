// Solution

function powersOfTwo(n){
    let arr = [];
    
    for (let i = 0; i <= n; i++) {
  //     arr.push(2)
      if (i == 0) {
        arr.push(1)
      } else {
        arr.push(2**i)
      }
    }
    return arr
  }