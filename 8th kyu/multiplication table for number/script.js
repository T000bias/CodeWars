// Sollution
function multiTable(number) {
  // good luck
  let multiple = 0;
  let results = ''
  for (let i = 1; i < 11; i++) {
//     console.log(i * number)
     multiple = i * number
    results += `${i} * ${number} = ${multiple}`;
    if (i < 10) {
      results +='\n';
    }
  }
  return results
}
