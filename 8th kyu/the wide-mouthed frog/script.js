// Solution
function mouthSize(animal) {
    // code here
    let regex = /alligator/ig
    return regex.test(animal) ? 'small':'wide'
}