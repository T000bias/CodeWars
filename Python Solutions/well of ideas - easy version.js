function well(x){
  console.log(x);
  let badCounter = 0;
  let goodCounter = 0;
  for (let i = 0; i < x.length; i++) {
//     console.log(x[i]);
    if (x[i] == 'bad') {
      badCounter += 1
    } else if (x[i] == 'good') {
      goodCounter += 1
    } else {
      continue
    }
  }
  console.log(badCounter);
  console.log(goodCounter);
  
  if (goodCounter > 2) {
    return "I smell a series!"
  } else if (goodCounter >= 1) {
    return "Publish!"
  } else {
    return "Fail!"
  }
}