// Solution

function position(letter){
    //Write your own Code!
      let ascii = letter.charCodeAt(letter)
      if (ascii >= 97 && ascii <= 122) {
        ascii = ascii - 96
      }
      return `Position of alphabet: ${ascii}`
    }