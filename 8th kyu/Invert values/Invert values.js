// Solution #1
function invert(array) {
  let copy = [...array]
//   console.log(copy)
  for (let i = 0; i < copy.length; i++) {
    copy[i] = copy[i] * -1; 
  }
  console.log(copy)
   return copy ;
}

// Solution #2
function invert(array) {
  let arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(-array[i])
  }
  return arr;
}