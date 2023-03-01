// Solution
class Person {
    // Get coding in ES6 :D
    constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
     sayFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
    static greetExtraTerrestrials(raceName){
      return `Welcome to Planet Earth ${raceName}`
    }
  }
  
  
  