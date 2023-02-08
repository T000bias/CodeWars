// Solution

function differenceInAges(ages){
    let newArr = []
    ages.sort(function(a,b) {
      return a - b
    })
    let sum = ages.reduce(function(acc,cur) {
      return (acc + cur)/ages.length
    })
    console.log(sum)
    newArr.push(ages[0])
    newArr.push(ages[ages.length - 1])
    newArr.push(ages[ages.length - 1] - ages[0])
    
    return newArr
  }