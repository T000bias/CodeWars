function noOdds( values ){
    // Return all non-odd values
    return values.filter(function(a) {
      return a % 2 === 0
    })
  }