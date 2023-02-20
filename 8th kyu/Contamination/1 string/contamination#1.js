function contamination(text, char){
    // Code here ;)
    let str = ""
    if (text.length === 0) {
      return ""
    }
    for (let i = 0; i < text.length; i++) {
      str += char
    }
    return str
  }