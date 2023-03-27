// Solution
function DNAStrand(dna){
    //your code here
    let letters = dna.split('')
    console.log(letters)
    let str = ''
    for (let letter of letters) {
      console.log(letter)
      if (letter.toLowerCase() === 'a') {
        str += 'T'
      } else if (letter.toLowerCase() === 't') {
        str += 'A'
      } else if (letter.toLowerCase() === 'c') {
        str += 'G'
      } else if (letter.toLowerCase() === 'g') {
        str += 'C'
      }
    }
    return str
  }