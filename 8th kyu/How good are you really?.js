// Solution
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let sum = 0
  let tick = 0
  let average = 0
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i]
    tick += 1
    average = sum/tick
    console.log(average)
  }
  if ( yourPoints > average) {
    return true
  } else {
    return false
  }

}
