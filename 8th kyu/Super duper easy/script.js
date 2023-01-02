//  Solution

function problem(x){
    //your code here
    if (typeof x == 'string') {
      return 'Error'
    } else {
      return x = (x *50) + 6
    }
}

// Solution 2
function problem(x){
    //your code here
    return typeof x == 'string' ? 'Error': x = (x * 50) + 6
  }