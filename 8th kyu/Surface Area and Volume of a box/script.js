// Solution
function getSize(width, height, depth) {
    let volume = width * height * depth
    let area = (2 * width * height) + (2 * height * depth) + (2 * width * depth)
    console.log(area)
    return [area,volume]
  }
  
  