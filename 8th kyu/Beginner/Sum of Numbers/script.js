// Solution

function getSum(a, b) {
    //Good luck!
   let arr = [a, b]
   let order = arr.sort(function(a,b) {
     return a - b
   })
   let start = order[0]
   let end = order[1]
   let sum = 0
 //   console.log(start,end)
   for (let i = start; i <= end; i++) {
     console.log(sum,i)
     sum += i
     console.log(sum,i)
   }
   return sum
 }