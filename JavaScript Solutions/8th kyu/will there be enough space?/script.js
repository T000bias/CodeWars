// solution
function enough(cap, on, wait) {
    // your code here
   let total = 0, overCapcity = 0;
    total = cap - on
    console.log(total)
    if (total - wait >= 0) {
      console.log(cap,on,wait)
      return 0
    } else if (total < wait ) {
      return wait - total
    }
  }