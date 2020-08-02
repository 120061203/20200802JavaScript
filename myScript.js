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
console.log("y is " + y);