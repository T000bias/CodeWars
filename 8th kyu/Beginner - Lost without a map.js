function maps(x){
  let array = [];
  console.log(x)
  for (let i = 0; i < x.length; i++) {
    let double = x[i]*2;
    console.log(double)
    array.push(double)
  }
  return array
}