// Solution

function findShort(s){
    let words = s.split(' ')
    let smallest = words[0]
    for (let word of words) {
      if (word.length < smallest.length) {
        smallest = word
      }
    }
    console.log(smallest)
    return smallest.length
  }