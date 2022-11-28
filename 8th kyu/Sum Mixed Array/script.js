// Solution

function sumMix(x){
    let sum = 0
    for (let i = 0; i < x.length; i++) {
      let conversion = Number(x[i])
      sum += conversion
    }
    return sum
  }