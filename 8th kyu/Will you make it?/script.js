// Solution 1

let zeroFuel1 = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    console.log(distanceToPump, mpg, fuelLeft)
    if (mpg * fuelLeft >= distanceToPump) {
      return true
    } else {
      return false
    }
  };

// Solution 2
let zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump ? true : false
  };