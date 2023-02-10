// Solution

function stringClean(s){
    // Function will return the cleaned string
    let size = s.split('')
    let size1 = size.filter(function(x) {
      return !parseInt(x) 
    })
    return (size1.join('').replaceAll('0',''))
  }