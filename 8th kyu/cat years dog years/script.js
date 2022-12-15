var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    let arr = []
    let count = humanYears
    let catYears = 15
    let dogYears = 15
    if (humanYears === 2) {
      catYears += 9
      dogYears += 9
    } 
    if (humanYears > 2) {
      catYears = catYears + (4 * humanYears) + 1
      dogYears = dogYears + (5 * humanYears) - 1
    }
  
  
    arr.push(humanYears,catYears,dogYears)
    return arr
}