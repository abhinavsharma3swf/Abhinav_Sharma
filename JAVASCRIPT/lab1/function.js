//Traditional function

function square(num){

    return num *num;
}
console.log(square(4));
//Fat arrow function

const square2 = (num)=>{
    return num*num;
}
console.log(square2(7));

//convert to a fat arrow, remove parentheses

const square3 = num=>{
    return num*num;
}
console.log(square3(9));

//convert to a fat arrow, with implied return

const square4 = num => num*num
console.log(square4(9));

//convert to a fat arrow with implied return
//multiple lines

const area = (num1, num2) => num1*num2
console.log("Area", area(2,4));

//convert to a fat arrow with implied return
//multiple lines with the default value for the variable

const area1 = (num1, num2 = 4) => num1*num2
console.log("Area", area1(2));

//convert to a fat arrow with implied return
//multiple lines with the default value for the variable

//use undefined to ignore the parameters for the function. It will take the default value from the function

const area2 = (num1 = 2, num2 = 4) => num1*num2
console.log("Area", area2(undefined, 2));

