// Solution

function findMultiples(integer, limit) {
    //your code here
  //   console.log( typeof integer,limit)
    let arr = []
    for (let i = integer; i <= limit; i += integer) {
      arr.push(i)
    }
    return arr
  }