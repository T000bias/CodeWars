// solution
function enough(cap, on, wait) {
    // your code here
//    let total = 0, overCapcity = 0;
    let total = cap - on
    console.log(total)
    if (total - wait >= 0) {
      console.log(cap,on,wait)
      return 0
    } else if (total < wait ) {
      return wait - total
    }
  }

function enough2(cap, on, wait) {
    // your code here
    let total = cap - on
    return total - wait >= 0 ? 0 : wait - total
}