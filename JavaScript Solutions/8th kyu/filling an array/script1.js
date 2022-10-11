// Solution for Filling an array (part 1)
const arr = N => {
  let copy = N;
  console.log(copy)
  let count = 0;
  let arr = [];
  while(count < N) {
    arr.unshift(copy - 1)
    count++
    copy--
  }
  console.log(arr)
  return arr
};