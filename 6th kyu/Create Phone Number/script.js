// Solution

function createPhoneNumber(numbers){
    let areaCode = numbers.slice(0,3).join('')
  //   console.log(areaCode)
    let secondSet = numbers.slice(3,6).join('')
    let lastSet = numbers.slice(6,10).join('')
  //   console.log(areaCode, secondSet,lastSet)
    return `(${areaCode}) ${secondSet}-${lastSet}`
  }