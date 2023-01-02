// Solution
function likes(names) {
    // TODO
    console.log(names)
    let string = '';
    let count = 0
    if (names ==+ []) {
      string = 'no one likes this'
    } 
    
    for (let i = 0; i < names.length; i++) {
      if (names.length == 1) {
        string = `${names[0]} likes this`
      } else if (names.length == 2) {
        string = `${names[0]} and ${names[1]} like this`
      } else if (names.length == 3) {
        string = `${names[0]}, ${names[1]} and ${names[2]} like this`
      } 
    }
    
    if (names.length > 3) {
      for (let i = 0; i < names.length-1; i++) {
        string = `${names[0]}, ${names[1]} and ${count++} others like this`
      }
    }
    
    return string
}