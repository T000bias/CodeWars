// Solution
function find_average(array) {
    //   console.log(array)
      let counter = 0;
      let sum = 0, total = 0;
      
      if (array.length === 0) {
        return 0
      }
      
      for (let i = 0; i < array.length; i++) {
    //     console.log(array[i])
        sum += array[i]
    //     console.log(sum)
        counter++
    //     console.log(counter)
      }
      console.log(total)
      return total = sum / counter
    }