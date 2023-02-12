// Solution

function vowelIndices(word){
    //your code here
    let vowelArray = ["a","e","i","o","u","y"]
    let arr = []
    for (let i = 0; i < word.length; i++) {
      if (vowelArray.indexOf(word[i].toLowerCase()) !== -1) {
        arr.push(i + 1)
      }
    }
    return(arr)
  }