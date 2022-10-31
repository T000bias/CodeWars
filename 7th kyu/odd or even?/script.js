// Solution
function oddOrEven(array) {
    //enter code here
   let sum = 0;
   let choice = 'even'
   for (let i = 0; i < array.length; i++) {
     sum += array[i]
     if (sum % 2 === 0) {
       choice = 'even'
     } else {
       choice = 'odd'
     }
   }
   return choice
 }