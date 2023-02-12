// Solution

function isVow(a){
    //   let vowels = ["a","e","i","o","u"];
      let arr = []
      for (let i = 0; i < a.length; i++) {
    //     console.log(a[i])
        if (String.fromCharCode(a[i]) === 'a' || String.fromCharCode(a[i]) === 'e' || String.fromCharCode(a[i]) === 'i' || String.fromCharCode(a[i]) === 'o' || String.fromCharCode(a[i]) === 'u') {
          arr.push(String.fromCharCode(a[i]).toLowerCase())
        } else {
          arr.push(a[i])
        }
      }
      return arr
    }