function add(num1,num2){
    return num1 + num2;
}
let number1 = prompt("Enter the first number: ");
let number2 = prompt("Enter the second number: ");
number1 = Number(number1);
number2 = Number(number2);
console.log("The sum is: " + add(number1, number2));