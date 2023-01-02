// Solution

function finalGrade (exam, projects) {
    let solution = 100
    if (exam > 90 || projects >10) {
      solution = 100
    } else if (exam > 75 && projects >= 5) {
      solution = 90
    } else if (exam > 50 && projects >= 2 ) {
      solution = 75
    } else {
      solution = 0
    }
    return solution
  }