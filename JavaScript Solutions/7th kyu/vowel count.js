function getCount(str) {
  console.log(str);
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
    if (str[i] == 'a') {
      counter += 1
    } else if (str[i] == 'e') {
      counter += 1
    } else if (str[i] == 'i') {
      counter += 1
    } else if (str[i] == 'o') {
      counter += 1
    } else if (str[i] == 'u') {
      counter += 1
    } else {
      continue
    }
    console.log(counter);
  }
  return counter
}