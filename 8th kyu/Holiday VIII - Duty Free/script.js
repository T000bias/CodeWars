// Solution

function dutyFree(normPrice, discount, hol){
    let discounted = (normPrice * discount)/100
    return Math.floor(hol / discounted)
  }