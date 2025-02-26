/*let numbers = [1,2,3,4,5];
numbers.push(4);
numbers.pop();

//store the last element after removing it with the method POP()
let removedElement = numbers.pop();
console.log(numbers);
console.log(removedElement);

//Front of the array
numbers.unshift(101);
console.log(numbers);

// copying the array with slice() function.

let copy = numbers.slice();
console.log("Copy of the Data", copy);

//Trim removes all the white spaces at the front and end of the strings/Arrays

let name = "             My name is Abhinav";
console.log(name);
name = name.trim();
console.log(name);

//creating an array

let students = ["Alice", "Bob", "Charlie"];
console.log(students);

//Add Diana at the end of the array

students.push("Diana");
console.log(students);

//Remove the last student from the array

students.pop(students);
console.log(students);

//Add Alice at the front of the array

students.unshift("Alex");
console.log(students);

//Remove the first student from the Array
students.shift();
console.log(students);*/


//for each function and it does not create a new array
/*let numbers =[4, 6, 8];
//predicate = element that means it is referencing each element in the array
numbers.forEach(function(element){
    console.log(element);
})


//map function: It also creates a new array
let numbers = [1,2,3];
let double = numbers.map(function (num){
    return num * 2;
});
console.log(double);

//filter function

let numbers = [10,19,18];
let double = numbers.filter(function (kittycat){
    return kittycat % 2 ===0;
});
console.log(double);*/

//sort function works with the strings only and it always sort the ANSCII values

let fruits = ["Orange", "Acorn", "jackfruit", "corn"];
let newfruits = fruits.map(el =>{
    return el.toLocaleLowerCase()       //creating the all lowercase since to compare the ANSCII values
})
console.log(newfruits.sort());
console.log(fruits.sort());

//sort the numbers

let numbers = [1,45,32,34];
numbers.sort(function(a,b){
    return a-b              //ascending
    return b-a             //descending
})
console.log(numbers);



