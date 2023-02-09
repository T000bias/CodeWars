// Solution

function addLength(str) {
//start-here
  let newArr = []
  let sp = str.split(' ')
  for (let i = 0; i < sp.length; i++) {
//     console.log(...sp[i])
    newArr.push(sp[i] + ' ' + sp[i].length)
  }
//   console.log(newArr)
  return newArr
}

