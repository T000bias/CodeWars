// Solution
function Ghost() {
    this.array = ['white','yellow','purple','red']
    this.random = Math.floor(Math.random() * this.array.length)
    this.color = this.array[this.random]
}