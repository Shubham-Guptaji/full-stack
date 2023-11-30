function factorial(num){
    if(num==1) return 1;
    return num + factorial(num-1);
}
const num1 = 10;
console.log(`Factorial of ${num1} is : ${factorial(num1)}`);
const num2 = 5;
console.log(`Factorial of ${num2} is : ${factorial(num2)}`);
const num3 = 4;
console.log(`Factorial of ${num3} is : ${factorial(num3)}`);