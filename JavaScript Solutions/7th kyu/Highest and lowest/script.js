// Solution
function highAndLow(numbers){
    // ...
    let arr = [];
    let change = numbers.split(" ");
    for (let i = 0; i < change.length; i++) {
      let convert = Number(change[i])  
      arr.push(convert)
    }
  //   console.log(arr)
    arr.sort((a,b) => {
      return a - b
    })
    let low = arr[0]
    let high = arr[arr.length - 1]
   return `${high} ${low}`
  }