// Solution
function solution(str, ending){
    // TODO: complete
    let arr = []
    for(let i = 1; i <= ending.length; i++) {
      arr.push(str[str.length - i])
    }
    return (arr.reverse().join('')) === ending
  }