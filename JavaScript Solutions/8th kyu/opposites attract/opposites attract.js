// Solution
function lovefunc(flower1, flower2){
  //   Goal: Return true if flower1 or flower2 are even and the other flower (1 or 2) is odd
  //   There are four possible combinations [00],[01],[10],[11]
  //   We can make a case for each combination and return the correct boolean value
    let love = true;
    let love1 = flower1 % 2;
    let love2 = flower2 % 2;
    console.log(love1, love2);
    
    if (love1 === 0 && love2 === 0) {
      love = false
    } else if (love1 === 0 && love2 === 1) {
      love = true
    } else if (love1 === 1 && love2 === 0) {
      love = true
    } else {
      love = false
    }
    
    return love
  }