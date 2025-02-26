// Dynamic age calculator

/*let birthyear = prompt("Enter your birth year");
let age = calculateAge(birthyear);
window.alert( "Your age is :"+ age);


function calculateAge(birthyear) {
    let currentyear = new Date().getFullYear();
    let age = currentyear - birthyear;
    return age;
}*/

// Simple Interest calculator

/*let principalAmount = prompt ("Enter the principal amount");
let rate = prompt(" Enter the rate of interest");
let time = prompt("Enter the years");

let total = simpleInterestCalculator(principalAmount, rate, time);
window.alert("Your total simple interest amount is " + total);

function simpleInterestCalculator(principalAmount, rate, time) {

    if (principalAmount<=0 || rate < 0 || time <=0){
        window.alert("Please enter the correct values");
    }
    else {
        let total = (principalAmount * rate * time) / 100;
        return total;
    }
}*/

// Favorite Color Selector

/*let color = ["Red", "Blue", "White"];
//let newString = addColor();
color.push(addColor());
window.alert(color);

function addColor() {

    let addValue= prompt( "Enter a color you want to add:->" );
    let temp = Number(addValue);
    if (!isNaN(Number(addValue))){
        window.alert( "You entered a number");
       // break;
    }

    return addValue;
}*/

let age = 18;
if (age%2===0){
    console.log("You are an even");
} else{
    console.log("You are an odd");
}





