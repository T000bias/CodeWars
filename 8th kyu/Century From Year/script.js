// Solution
function century(year) {
    // Finish this :)
  //   1700, then we are in the 17th century
  //   1701, then we are in the 18th century
  //   console.log(Math.floor(year))
    let century = 0
    for (let i = 0; i < year; i++) {
  //     console.log(i)
      if (i % 100 === 0) {
        century++
      }
    }
    return century
  }