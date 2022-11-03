// Solution

function monkeyCount(n) {
    // your code here
      let count = 0;
      let arr = []
      for (let i = 0; i < n; i++) {
        arr.push(count += 1);
    //     console.log(count)
      }
      return arr
    }