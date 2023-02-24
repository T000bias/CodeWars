// Solution
function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    let total = 0;
    let discount = 0;
    for (let i = 1; i <= litres; i++) {
      if (i % 2 === 0) {
        console.log(i)
        discount += 0.05
        console.log(discount)
      }
      if (discount >= 0.25) {
        discount = 0.25
      }
    }
    total = litres * (pricePerLitre - discount)
    return Number(total.toFixed(2))
  }