// Solution
function getDivisorsCnt(n){
    // todo
//   console.log(typeof n)
  let count = 0
  if (n === 1) {
    return count = 1
  }
  for (let i = 0; i <= n; i++) {
//     console.log(i)
    if (n % i === 0) {
//       console.log(n % i === 0)
      count++
    }
  }
  return count
}