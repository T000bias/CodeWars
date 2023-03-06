// solution
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let numerator = 0;
  let denominator = 0;
  let total = 0;
  for (let index = 0; index < marks.length; index++) {
//     console.log(marks.length);
    numerator += marks[index]
    denominator += 1
  }
  return Math.floor(total = numerator / denominator)

}