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

// let color = ["Red", "Blue", "White"];
// //let newString = addColor();
// color.unshift(addColor());
// window.alert(color);
// console.log(color);
//
// function addColor(color) {
//
//     let addValue = prompt("Enter a color you want to add:->");
//     let temp = Number(addValue);
//     if (!isNaN(Number(addValue))) {
//         window.alert("You entered a number");
//     } else {
//         return addValue;
//     }
// }

//Event Countdown with Date Object
//
// function calculateDaysUntil(eventDate) {
//     let date = new Date();
//     let event = new Date(eventDate);
//     return event - date;
//
// }
//
// let eventDate = prompt("Enter the event date on the YYYY-MM-DD format");
//
// const datePattern = /^\d{4}-\d{2}-\d{2}$/;
//
// while (!datePattern.test(eventDate)) {
//     eventDate = prompt("Enter the event date on the YYYY-MM-DD format");
//     console.log(eventDate);
// }
//
// let daysUntilEvent = calculateDaysUntil(eventDate);
// if (Math.ceil(daysUntilEvent / (1000 * 60 * 60 * 24)) < 0) {
//     window.alert("the event has passed");
// } else {
//     window.alert(Math.ceil(daysUntilEvent / (1000 * 60 * 60 * 24)));
// }


// //Temperature Classifier
//
// function classifyTemperature  (tempInCel){
//     let tempInF = (tempInCel * (9/5)) +32;
//
//     if (tempInF >100) {
//         window.alert("Hot");
//         return "hot";
//     }
//     else if (tempInF > 80){
//         window.alert("Warm");
//         return "Warm";
//     }
//     else if (tempInF < 40){
//         window.alert("Cold");
//         return "Cold";
//     }
//     else if (tempInF < 80 && tempInF >40)
//     {
//         window.alert("Chilly");
//         return "Chilly";
//     }
//     else{
//         window.alert("Error you did not enter any number");
//         return "Error you did not enter any number";
//     }
//
// }
//
// let tempInCel = prompt("Enter the temperature in Celsius");
// let result = classifyTemperature(tempInCel);
// console.log(result);

// Student Array Operations
//
const studentArray = [
    {name: "Alice", age: 20},
    {name: "Bob", age: 22},
    {name: "Charlie", age: 18}
];
console.log("Array before updates: ", studentArray);
const studentName = prompt("Enter the name of the student to modify. We have Alice, Bob and Charlie :");

let modifyStudentAge = (name, newAge) => {
    let student = studentArray.find(student => student.name === name);

    if (student) {
        student.age = newAge;
        console.log("Updated students:", studentName, student.age);
        console.log(studentArray);
    } else {
        console.log("Error student not found");
    }
}

if (studentName) {
    const student = studentArray.find(student => student.name === studentName);

    if (student) {
        const newAgeInput = prompt("Enter a new age for:");

        // Check if the new age is a valid number
        const newAge = Number(newAgeInput);

        if (!isNaN(newAge)) {
            modifyStudentAge(studentName, newAge);
        } else {
            console.log("Error: The age must be a valid number.");
        }
    } else {
        console.log(`Error: Student named ${studentName} not found.`);
    }
} else {
    console.log("Error: Name input is required.");
};

///Grade classification

// const classifyGrade = (enteredGrade) => {
//     let grade = enteredGrade >= 90? "A":
//                 enteredGrade >= 80? "B":
//                 enteredGrade >= 70? "C":
//                 enteredGrade >= 60? "D" : "F"
//
//     console.log( "The grade classification is : " + grade);
// }
//
// let enteredGrade = prompt ("Enter the grade as a number");
// classifyGrade(enteredGrade);
 //Ternary Operator ///  (condition? true : false)

///
///Shopping List Operations
//
// const shoppingListArray = ["Eggs", "Butter", "Flour"];
//
// let modify = prompt(`The list contains ${shoppingListArray} \n Enter new item to update the list`);
//
// const modifyItem = (shoppingListArray, modify) => {
//     shoppingListArray.push(modify);
//     console.log("The updated list is: " + shoppingListArray);
// }
// modifyItem(shoppingListArray,modify);

///Weekday Detector

// const day = (todayDay) => {
//     let daysoftheweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//
//     console.log(`Today is: ${daysoftheweek[todayDay]}`);
// }
// let date = new Date();
// let todayDay = date.getDay();
// day(todayDay);

///

// let date = new Date();
// const todayDate = date.getDate();
// const year = date.getFullYear();
// const month = date.getMonth();
// let futureDate = new Date(2025,4,17);
// //Fat Arrow function to determine's today's date.
// const dateFunc = (todayDate,year, month) => {
//
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//
//     if (todayDate === 1 || todayDate === 21 || todayDate === 31) {
//         console.log(`Today is: " ${year}, ${months[month]} ${todayDate}st`);
//     } else if (todayDate === 2 || todayDate === 22) {
//         console.log(`Today is: " ${year}, ${months[month]} ${todayDate}nd`);
//     } else if (todayDate === 3 || todayDate === 23) {
//         console.log(`Today is: " ${year}, ${months[month]} ${todayDate}rd`);
//     } else if (todayDate >= 4 && todayDate >= 20) {
//         console.log(`Today is: " ${year}, ${months[month]} ${todayDate}th`);
//     } else if (todayDate >= 24) {
//         console.log(`Today is: " ${year}, ${months[month]} ${todayDate}th`);
//     }
// }
// dateFunc(todayDate, year, month);
// let remainder = futureDate - date;
// let daysLeft = Math.ceil(remainder / (1000 * 60 * 60 *24));
// console.log(`And you have ${daysLeft} days left in this web design program until graduation`);
