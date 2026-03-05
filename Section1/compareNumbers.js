let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
num1 = Number(num1);
num2 = Number(num2);
if (num1 > num2) {
    console.log(num1 + " is greater than " + num2);
}
else if (num1 < num2) {
    console.log(num1 + " is less than " + num2);
}  
else {
    console.log(num1 + " is equal to " + num2);
}