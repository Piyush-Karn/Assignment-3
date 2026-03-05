const checkEvenOdd = (num) => {
    if(num%2===0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

let number = prompt("Enter a number: ");
number = Number(number);
console.log("The number is: " + number);
console.log("The number is " + checkEvenOdd(number));