// Solution
function convertPalindromes(numbers) {
    // console.log(numbers)
    let array = []
    let newArr = []
    for (let i = 0; i < numbers.length; i++) {
        let test = String(numbers[i])
        let reversed = test.split('').reverse().join('')
        if (test === reversed) {
            array.push(true)
        } else {
            array.push(false)
        }
        console.log(array)
    }
    for (let index of array) {
        if (index === true) {
            newArr.push(1)
        } else {
            newArr.push(0)
        }
    }
    console.log(newArr)
};