// solution

function filter_list(l) {
    // Return a new array with the strings filtered out
    let arr = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof l[i] == 'number') {
        arr.push(l[i])
      }
    }
    return arr
  }