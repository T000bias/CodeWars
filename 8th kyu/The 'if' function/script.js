// Solution
function _if(bool, func1, func2) {
    // ...
    if (bool == true) {
      console.log(func1())
      func1()
    } else {
      func2()
    }
  }