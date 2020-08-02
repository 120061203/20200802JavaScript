function myFunction() {
    document.getElementById("demo").innerHTML = "內容被松林修改了";
}

hoistedExercise();

function hoistedExercise() {
    console.log("hoistedExercise Success");
}

printMessage("printMessage", 3);

function printMessage(message, times) {
    for (var i = 0; i < times; i++) {
        console.log(message);
    }
    console.log("value is " + i);
}