// Solution
const flip=(d, a)=>{
    //TODO
    let direction;
    if (d === 'R' || d === 'r') {
      direction = a.sort(function(a,b) {
        return a - b
      })
    } else if(d === 'L' || d === 'l')  {
      direction =a.sort(function(a,b) {
        return b - a
      })
    }
    return direction
}
