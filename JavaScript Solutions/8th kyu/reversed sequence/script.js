// Solution
const reverseSeq = n => {
    //   Display the values given
    //   console.log(n);
    //   Try to take away a number from the argument
    //   console.log(n-1)
      let newArr = []
    //   console.log(n)
      for (let i = n; i > 0; i--) {
        newArr.push(i)
    //     console.log(newArr)
      }
      return newArr
    };