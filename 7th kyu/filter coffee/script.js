// Solution

function search(budget, prices) {

    // return array of prices that are within budget
      let arr = []
      console.log(budget,prices)
      for (let i = 0; i < prices.length; i++) {
        if (prices[i] <= budget) {
          let convert = String(prices[i])
          arr.push(convert)
        }
        arr.sort(function(a,b) {
          return a - b
        })
      }
      return arr.join()
    
    }