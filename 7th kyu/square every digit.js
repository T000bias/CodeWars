function squareDigits(num){
  console.log(num)
// The first thing I should do is find a way to separate the
//  number into its individual pieces.
// Maybe putting the argument into an array and use array methods
// to acheive my first statement.
  let newArray = [];
  let digitArray = Array.from(String(num), Number);
  console.log(digitArray);
  for (let i = 0; i < digitArray.length; i++) {
    let container = 0;
    let shortcut = '';
    let converter;
    container = digitArray[i] * digitArray[i]
    converter = shortcut + container
    newArray.push(converter);
    console.log(newArray);
  }
  return parseInt(newArray.join(''));
}