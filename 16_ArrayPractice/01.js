let arrNum = [10, 20, 30, 40];
let arrString = ["Aditya", "Kumar", "Gupta", "Sasaram", "Bihar"];

//  Jab sirf print karna ho ya side-effects perform karne ho. nothing return

// let forEach = arrNum.forEach((num)=>{
//     console.log(num *2);
// })

// console.log(typeof(forEach)); // nothing so output is undefined

let forMap2 = arrNum.map((num) => {
  return num * 2; //object
});
// console.log(typeof forMap2);

let numbers = [10, 20, 25, 30, 35, 40];

let greaterThan25 = numbers.filter((num) => num > 25);

// console.log(greaterThan25); // [30, 35, 40]
// console.log(arrString);

let users = [
  { name: "Rohan", age: 20 },
  { name: "Aditya", age: 22 },
  { name: "Sanya", age: 19 },
];
// find only first one , Based on condition
let youngUser = users.find((user) => user.age > 19);
// console.log(youngUser); // { name: 'Rohan', age: 20 }

let marks = [33, 45, 60, 70];
// any true or false
let hasFailed = marks.some((mark) => mark < 35);
// console.log(hasFailed); // true (kyunki 33 fail hai)

let prices = [100, 200, 300];

let totalPrice = prices.reduce((total, price) => total + price, 0);

// console.log(totalPrice); // 600

const students = [
  { id: 1, name: "Aditya", age: 21, grade: "A", marks: 85 },
  { id: 2, name: "Rahul", age: 22, grade: "B", marks: 78 },
  { id: 3, name: "Priya", age: 20, grade: "A", marks: 90 },
  { id: 4, name: "Sanya", age: 21, grade: "C", marks: 65 },
  { id: 5, name: "Rohan", age: 23, grade: "B", marks: 74 },
];

// students.map((s , idx) => {
//     console.log(idx+ " "+s.name + " " + s.grade)
// } );




    

