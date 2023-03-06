// Solution

function digitize(n) {
  //code here
  let array = n.toString().split("").reverse().map(Number);
  console.log(array)
  return array
}