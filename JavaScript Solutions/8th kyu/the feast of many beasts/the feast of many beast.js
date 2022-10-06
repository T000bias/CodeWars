// Solution
function feast(beast, dish) {
  //your function here
    let answer;
    let first = beast.split("")
    console.log(first[first.length-1])
    let second = dish.split("")
    if (first[0] === second[0] && first[first.length-1] === second[second.length-1]) {
      answer = true;
    } else {
      answer = false
    }
    return answer
  }