// Solution
function bandNameGenerator(str) {
    // Happy coding
    let string = ""
    if (str[0].toLowerCase() === str[str.length - 1]) {
      string = str[0].toUpperCase() + str.slice(1) + str.slice(1)
    } else {
      string = `The ${str[0].toUpperCase() + str.slice(1)}`
    }
    return string
  }