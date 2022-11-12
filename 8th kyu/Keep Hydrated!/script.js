// Solution
function litres(time) {
    //   console.log(time)
      
      let litre;
      if (time <= 1) {
        litre = 0
      } else {
        litre = Math.round(Math.floor(time) - 0.5) / 2
      }
      console.log(litre)
      return Math.floor(litre)
    }