// Solution
function getSumOfDigits(int) {
    let sum = 0;
    let digits =  int.toString().split('');
    console.log(digits)
    for(let ix = 0; ix < digits.length; ix++) {
  //     parseInt(digits[ix])
      sum += parseInt(digits[ix]);
      console.log(sum)
    }
    return sum;
  }