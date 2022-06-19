// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



//Solution
function countPositivesSumNegatives(input) {
    let positive = 0;
    let negative = 0;
    let array = [];
    if (input == null || input.length < 1 ) {
      return array = []
    }
    for (let i = 0; i < input.length; i++) {
      console.log(input[i])
      if (input[i] > 0) {
        positive += 1; 
      } else if (input[i] < 0) {
        negative = negative + input[i]
      } 
    }
    array.push(positive)
    array.push(negative)
    return array
  }