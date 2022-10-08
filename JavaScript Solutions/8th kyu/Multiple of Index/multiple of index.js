// Solution
function multipleOfIndex(array) {
  // good luck
  let arr = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    
    console.log(array[i])
    console.log(counter)
//     counter += 1
    if (array[i] % counter === 0) {
      console.log("divisible")
      arr.push(array[i])
    }
    counter += 1
  }
  return arr
}