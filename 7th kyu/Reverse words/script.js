// Solution
function reverseWords(str) {
    // Go for it
    let arr = []
    let string = str.split(' ')
    for (let word of string) {
      arr.push(word.split('').reverse().join(''))
    }
    return arr.join(' ')
}