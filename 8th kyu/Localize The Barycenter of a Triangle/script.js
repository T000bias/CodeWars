function barTriang(p1, p2, p3){
    //your code here
    let arr = []
    let sum1 = (p1[0]+p2[0]+p3[0])/3
    let sum2 = (p1[1]+p2[1]+p3[1])/3
    arr.push(parseFloat(sum1.toFixed(4)))
    arr.push(parseFloat(sum2.toFixed(4)))
    return arr
  }