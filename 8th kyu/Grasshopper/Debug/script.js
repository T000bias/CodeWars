// Solution

function weatherInfo (temperature) {
    var celsius = (temperature - 32) * (5/9)
    if (celsius < 0) {
      return (celsius + " is freezing temperature")
    } else {
      return (celsius + " is above freezing temperature")
    }
  }