// Solution

var min = function(list){
    console.log(list)
  list.sort(function(first,second) {
    return first - second
  })
    return list[0];
}

var max = function(list){
//     console.log(list)
    list.sort(function(first, second) {
      return first - second
    })
    return list[list.length - 1];
}