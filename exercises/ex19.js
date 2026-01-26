/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/


const myLaugh = function (max) {
    var laugh = "";
    for (let i = 0; i < max; i++) {
        laugh += "ha";
    }
    return laugh
}
//console.log(myLaugh(2))

/* const emotion = function () {
    return "happy";
}
//console.log(emotion()) */
