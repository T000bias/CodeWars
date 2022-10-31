// Solution
function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i]
//     console.log(sum)
  }
  
  for (let j = 0; j < arr2.length; j++) {
    sum2 += arr2[j]
  }
  return sum + sum2
}