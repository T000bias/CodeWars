function abbrevName(name){

  // code away
const words = name.split(' ');
console.log(words);
const firstName = words[0][0];
const lastName = words[1][0];
return `${firstName.toUpperCase()}.${lastName.toUpperCase()}`
}