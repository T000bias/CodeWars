// Solution

function grow(x){
  let sum = 1;
  for (let i = 0; i < x.length; i++) {
    console.log(x[i])
    sum = sum * x[i]
    console.log(sum)
  }
  return sum
}