// Defining the constructor function Person with initializing property name and age.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to greet the Person.
Person.prototype.sayHello = function () {
    console.log("Hello Mr. " + this.name);
} 

// Defining an Employee constructor that inherits from Person and also definind designation property.
function Employee (name, age, designation) {
    Person.call(this, name, age);
    this.designation = designation;
}

// Inheriting the property from Person
Employee.prototype = Object.create(Person.prototype);

// Defining the getDetails function.
Employee.prototype.getDetails = function() {
    console.log("The Employee named", this.name,"whose age is",this.age,"has the designation of", this.designation);
};

// Use to create new Employee.
const newEmployee = new Employee('Hitesh Choudhary', 28, 'Software Engineer');
newEmployee.getDetails();
