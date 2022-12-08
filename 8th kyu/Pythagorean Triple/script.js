// Solution

function isPythagoreanTriple(integers) {
    // Good luck friends!
    let order = integers.sort(function(a,b) {
      return a - b
    } )
    if (order[0]**2 + order[1]**2 == order[2]**2) {
      return true
    } else {
      return false
    }
  }