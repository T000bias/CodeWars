// Solution
function generateRange(min, max, step){
    let arr = []
    while (min <= max) {
      arr.push(min)
      min += step
    }
    return arr
  }