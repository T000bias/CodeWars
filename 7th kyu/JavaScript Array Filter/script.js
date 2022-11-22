// Solution

function getEvenNumbers(numbersArray){
    // filter out the odd numbers
    let even = numbersArray.filter(
      number => number % 2 == 0
    );
    console.log(even)
    return even
  }