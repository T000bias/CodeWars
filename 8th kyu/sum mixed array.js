function sumMix(x){
  let newArray = [];
  let total = 0;
  for (let i = 0; i < x.length; i++) {
    newArray.push(parseInt(x[i]));
  }
  for (let j = 0; j < newArray.length; j++) {
    total = total + newArray[j];
    
  }
  return total
}