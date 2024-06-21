// Define a base class Shape with a draw method
class Shape {
    draw() {
        console.log('Draw is called from Shape Class.');
    }
}

// Created a Circle subclass that overrides the draw method
class Circle extends Shape {
    draw() {
        console.log('Draw is Called from Circle Class.');
    }
}

// Created a Rectangle subclass that overrides the draw method
class Rectangle extends Shape {
    draw() {
        console.log('Draw is Called from Rectangle Class.');
    }
}

// Using these classes
const circle = new Circle();
const rectangle = new Rectangle();

// Calling the draw method.
circle.draw();
rectangle.draw();