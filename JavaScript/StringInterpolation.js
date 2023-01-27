// String InterPolation
// let Fname = "Aman";
// let Lname = "patel";

// // let fullName = Fname + " " + Lname;
// // console.log(fullName);
// console.log(`${Fname} ${Lname}`); //String Interpolation
// console.log(`My name is ${Fname} ${Lname}`); //String Interpolation



// Default params 

// function addTwoNumber(num1,num2)
// {
//     return num1+num2;
// }
// console.log(addTwoNumber(5,6));

// Arrow Funciton
// let addTwoNumber = (num1, num2) => num1 + num2;

// console.log(addTwoNumber(5, 6));

// ********Rest and spread Operator are applicable in arrays and objects in js

// let array = [5, 10, 15, 20, 25, 30, 35];
// spread Operator ==> denoted by ...
// let newArray = [...array, 40, 45, 50];
// console.log(array);
// console.log(...array);
// console.log(...newArray);



// Rest operator ==> denoted by ...

let maxOfNumbers = (...numbers) => {
    let max = numbers.MIN_VALUE;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
}
maxOfNumbers(5, 10, 15, 20, 25, 30, 35);