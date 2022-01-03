// Twice as Old
function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    let sonDouble = sonYearsOld * 2
    let result = dadYearsOld - sonDouble;
    if (result < 0) {
      result *= -1
    }
    return result
  }