// Solution
function evenNumbers(array, number) {
    // good luck
    let arr = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        arr.push(array[i])
      }
      if (arr.length > number) {
        arr.shift()
      }
    }
    return arr
  }