// Solution
function numberToPower(number, power){
    //   console.info(Math.log2(1024));
      // Code here
      let solution = number;
      
      if (power === 0) {
        solution = 1
      }
      
      for (let i = 1; i < power; i++) {
        solution *= number
        
      }
      console.log(solution)
      return solution
    }