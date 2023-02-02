// Solution
function uniqueSum(lst){
    //your magic code goes here
    if (lst.length <= 0) {
      return null
    }
    let sum = 0;
    let array = lst.filter(function(item,index) {
      return lst.indexOf(item) === index
    })
    for (let number of array) {
      sum += number
    }
    console.log(lst, sum)
    return sum
  }