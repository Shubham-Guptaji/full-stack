// Defining the constructor function Person with initializing property name and age.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to greet the Person.
Person.prototype.sayHello = function () {
    console.log("Hello Mr. " + this.name);
} 

// Using it to declare a new Person.
const newPerson = new Person("Ram", 22);

// Calling the sayHello function.
newPerson.sayHello();