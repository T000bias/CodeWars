// Solution
function whoIsPaying(name){
    let attention = name
    return attention.length <= 2 ? [name] : attention.length > 2 ? [name, name.slice(0,2)] : false
  }