function square(num1){
    return num1 * num1;
}
let squareArrowFunction = (num1) => num1 * num1;

let number1 = prompt("Enter a number: ");
number1 = Number(number1);
console.log("The square using normal function is: " + square(number1));
console.log("The square using arrow function is: " + squareArrowFunction(number1));