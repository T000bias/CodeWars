// Solution
function pipeFix(numbers){
    /*
      [1,2,3,4,6]
      starting number = first index
      ending number = last index
    
    */
    let arr = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      arr.push(i)
    }
    return arr
  }