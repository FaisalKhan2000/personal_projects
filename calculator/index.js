/* 

addition +
subtract -
multiply *
divide /

equal = 

ac -> delete all

delete -> remove1



*/

// keys
let add = document.querySelector(".add");
let subtract = document.querySelector(".subtract");
let divide = document.querySelector(".divide");
let multiply = document.querySelector(".multiply");

// Numbers
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");

// Equal
let equal = document.querySelector(".equal");

// delete
let del = document.querySelector(".del");

// Input

let input = document.querySelector(".input");
input = [];

one.addEventListener("click", () => {
  input.push(1);
});

console.log(input);
