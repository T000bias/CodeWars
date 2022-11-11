// Solution
function rentalCarCost(d) {
    // Your solution here
    let rental = 40 ;
    if (d >= 7) {
      rental = (rental * d) - 50
    } else if (d >= 3) {
      rental = (rental * d) - 20
    } else {
      rental *= d
    }
    return rental
  }