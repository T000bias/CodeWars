// Solution
function descendingOrder(n){
    //...
    return (Number(String(n).split('').sort(function(a,b) {
      return a - b
    }).reverse().join('')))
  }