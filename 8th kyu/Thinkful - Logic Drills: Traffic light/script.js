// Solution
function updateLight(current) {
    if (current == 'green') {
      current = 'yellow'
    }  else if (current == 'yellow') {
      current = 'red'
    } else {
      current = 'green'
    }
    //your code here!
    return current
  }