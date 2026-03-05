function checkNumber(input){
    if(!isNaN(input)){
        return true;
    }
    else{
        return false;
    }
}
let num = prompt("Enter a value: ");
console.log(checkNumber(num));