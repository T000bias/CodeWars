// Solution

const cannonsReady = (gunners) => {
    //your solution here
    let array = Object.values(gunners)
    console.log(array)
    if (array.includes('nay')) {
      return 'Shiver me timbers!'
    }
    return 'Fire!'
  }