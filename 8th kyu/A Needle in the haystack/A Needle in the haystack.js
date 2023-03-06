// Solution
function findNeedle(haystack) {
  // your code here
  let counter = -1;
  let result = false
  for (let index = 0; index < haystack.length; index++) {
    counter += 1
    console.log(counter)
    if (haystack[index] == 'needle') {
      result = true
      return `found the needle at position ${counter}`
    }
  }
}