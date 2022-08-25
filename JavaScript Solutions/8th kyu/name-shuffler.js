// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
  //Shuffle It
  let stringArray = str.split(" ");
  let newArray = []
  console.log(stringArray);
  let front = stringArray[1];
  newArray.push(front);
  let back = stringArray[0];
  newArray.push(back);
//   console.log(front);
//   console.log(back);
  console.log(newArray);
  return newArray.join(' ')
  
}
