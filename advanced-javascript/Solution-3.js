// Created a Calculator object with methods for calculating operations
const Calculator = {
    ans: 0,
    // Method for addition
    add(num) {
        this.ans += num;
        return this;
    },
    // Method for subtraction
    subtract(num) {
        this.ans -= num;
        return this;
    },
    // Method for multiplication
    multiply(num) {
        this.ans *= num;
        return this;
    },
    // Method for division
    divide(num) {
        this.ans /= num;
        return this;
    },
    // Method to get the result
    getResult() {
        return this.ans;
    }
};

// Example usage:
const result = Calculator.add(15).subtract(5).multiply(6).divide(2).getResult();
console.log("The Result is :",result);
