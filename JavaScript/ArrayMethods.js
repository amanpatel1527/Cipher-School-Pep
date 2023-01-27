//1.=>> .map()
// let array = [1,2,3,4,5];

// let newArray = array.map((value,index)=>{
//     return value*value;
// })
// console.log(newArray);

// 2.=>>forEach()
// let array = [1, 2, 3, 4, 5];
// array.forEach((value, index) => {
//     console.log(value);
// });

// 3.==>.filter()

// let array = [10, 20, 30, 40, 50, 60]

// let newArray = array.filter((value) => {
//     return value >= 30;
// })
// console.log(newArray);

// 4.=>>.find()

// let array = [10, 20, 30, 40];
// let newArray = array.find((value) => {
//     return value > 20;
// });
// console.log(newArray);

// 4.==>.sort()
// let array = [1, 4, 6, 5, 2, 1, 3, 4, 58, 0, 111];
// let sortedArray = array.sort((el1, el2) => {
//     el1 = Number(el1)
//     el2 = Number(el2)
//     return el1 - el2;
// });
// console.log(sortedArray);

// 5.=>Object desturcturing

let myObject = {
    name: "alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "New York",
        state: "Ny",
        country: "usa",
        passportDetails: {
            passportNumber: "ABCD4512",
        },
    },
};

let passportNumber = myObject.address.passportDetails.passportNumber;
console.log(passportNumber);
let Myname = myObject.name;
let Myage = myObject.age;