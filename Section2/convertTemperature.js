function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

let cel=prompt("Enter temperature in Celsius: ");
cel=Number(cel);
let far=prompt("Enter temperature in Fahrenheit: ");
far=Number(far);

console.log(cel + " Celsius is = " + celsiusToFahrenheit(cel) + " Fahrenheit.");
console.log(far + " Fahrenheit is = " + fahrenheitToCelsius(far) + " Celsius.");