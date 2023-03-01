// Solution
// Get Coding :)

class Shark extends Animal {
    constructor(name, age, status) {
      super(name,age);
      this.species = 'shark';
      this.legs = 0;
      this.status = status;
    }
  }
  
  class Cat extends Animal {
    // Do the same here as you did for Shark - define your constructor function and any other methods you need
    constructor(name, age, status) {
      super(name,age, status)
      this.status = status
      this.species = 'cat'
      this.legs = 4
    }
    introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`
    }
  }
  
  class Dog extends Animal {
    // On your own now - you can do it :D
    constructor(name, age, status, master) {
      super(name, age, status)
      this.name = name
      this.master = master
      this.status = status
      this.legs = 4
      this.species = "dog"
    }
    
    greetMaster() {
      return `Hello ${this.master}`
    }
  }