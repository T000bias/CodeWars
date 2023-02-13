// Solution
function wordSearch(word, text){
    console.log(word)
    return text.search("\\b"+ word +"\\b") > -1
  }