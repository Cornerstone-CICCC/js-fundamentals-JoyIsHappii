/*
Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
Prints: "I am happy, haha!"
*/


const laugh = function (max) {
    var myLaugh= "";
    for (let i = 0; i < max; i++) {
        myLaugh += "ha";
    }
    return myLaugh
    }
/* console.log(laugh(2)); */

const emotion = function (feeling, laugh) {
    var preWord = "I am ";
    console.log(preWord + feeling + ", " + laugh + "!");
}

emotion("happy",laugh(2));

//done