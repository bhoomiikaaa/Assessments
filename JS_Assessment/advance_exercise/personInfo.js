class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo() {
      console.log(`Name and Age : ${this.name}, ${this.age}`);
      
    }
  }
  
  // Create an instance of the Person class
  const person1 = new Person("Bhoomika", 23);
  const person2 = new Person("Shreya", 25);
  const person3 = new Person("Yamini", 21);
  const person4 = new Person("Vertika", 29);

  
  // Display the person's information
  person1.displayInfo();
  person2.displayInfo();
  person3.displayInfo();
  person4.displayInfo();
  