// Solution

function reverseWords(str){
    let spl = str.split(" ")
    let arr = [];
    for (let i = spl.length - 1; i >= 0; i--) {
      arr.push(spl[i])
    }
    return (arr.join(" "))
  }