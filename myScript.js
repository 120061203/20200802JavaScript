function myFunction() {
    document.getElementById("demo").innerHTML = "內容被松林修改了";
}
///////////////////////////////
hoistedExercise();

function hoistedExercise() {
    console.log("hoistedExercise Success");
}
////////////////////////////////////////////////
printMessage("printMessage", 3);

function printMessage(message, times) {
    for (var i = 0; i < times; i++) {
        console.log(message);
    }
    console.log("value is " + i);
}
// console.log("i is " + i);
////////////////////////////////////////////////////

// function letMessage(message, times) {
//     for (let i = 0; i < times; i++) {
//         console.log(message);
//     }
//     console.log("value of i is" + i);
// }
// letMessage("letMessage", 4);
///////////////////////////////////////////////////
const x = 10;
if (x > 0) {
    //x = 5; //error const variable cannot reassign
    const y = 10; //error y is not defined
}
//console.log("x is " + x);
//console.log("y is " + y);
///////////////////////////////////////////////////
//Numbers Exercise
const homework = 0.45;
const midterm = 0.2;
const final = 0.35;
const score =
    homework * 87 + midterm * 90 + final * 95;
console.log("score is " + score); // 90.4
//////////////////////////////////////
//Strings Exercise
let snack = 'coo';
snack += 'kies';
snack = snack.toUpperCase();
console.log("I want " + snack);
/////////////////////////////////////
//Boolean Exercise
let isHungry = true;
let age = 14;
let isTeenager = age > 12 && age < 20;
let pizza = 0;
if (isHungry && isTeenager) { pizza++; }
console.log("pizza is " + pizza);
/////////////////////////////////////////
//Arrays
let list = [];
let groceries = ['milk', 'cocoa puffs'];
groceries[1] = 'kix'; //可修改value
console.log(groceries[1]);
///////////////////////////////////////
//Maps Exercise
const prices = {};
const scores = {
    'peach': 100,
    'mario': 88,
    'luigi': 91
};
console.log("peach is " + scores['peach']); // 100
scores.luigi = 87;
console.log("scores.luigi is " + scores.luigi); // 87
delete score.peach;