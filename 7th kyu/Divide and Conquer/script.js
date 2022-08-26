// Solution
function divCon(x){
    let num = 0
    let strNum = 0
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] === "number") {
        num += x[i]
      } else {
        strNum += parseInt(x[i])
      }
    }
    return num - strNum
  }