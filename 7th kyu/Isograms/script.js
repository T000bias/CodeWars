// Solution
function isIsogram(str){
    //...
    let words = str.toLowerCase().split('')
    return (words.filter(function(item,index) {
      return words.indexOf(item) === index
    }).join('') === str.toLowerCase())
}