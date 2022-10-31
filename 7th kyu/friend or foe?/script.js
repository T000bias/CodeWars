// Solution
function friend(friends){
    //your code here
    let arr = []
    for (let i = 0; i < friends.length; i++) {
      console.log(friends[i])
      if (friends[i].length === 4) {
        arr.push(friends[i])
      }
    }
    return arr
  }