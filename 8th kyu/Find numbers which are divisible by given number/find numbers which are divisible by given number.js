// Solution #1

function divisibleBy(numbers, divisor){
  //   console.log(numbers)
  //   console.log(divisor)
    let array = [];
    for (let index = 0; index < numbers.length; index++) {
      console.log(numbers[index])
      if (numbers[index] % divisor == 0) {
        console.log('correct')
        array.push(numbers[index])
        console.log(array)
      }
    }
    return array
  }