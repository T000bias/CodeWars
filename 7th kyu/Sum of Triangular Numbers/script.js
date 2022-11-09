// Solution

function sumTriangularNumbers(n) {
    //   let arr = [1]
      console.log(n)
      let total = 0;
      let prev = total;
      let count = 1
      for (let i = 0; i < n; i++) {
        total += count
    //     console.log(total)
        prev += total
        console.log(prev)
        count += 1
        
      }
      return prev;
    }
    