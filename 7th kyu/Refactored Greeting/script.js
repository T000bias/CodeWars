// Solution
class Person {
    constructor(yourName) {
      this.name = yourName;
    }
    greet(myName) {
      return `Hello ${myName}, my name is ${this.name}`
    }
  }