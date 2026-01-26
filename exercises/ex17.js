/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

const myLaugh = function(max) {
    var laugh = "";
    for (let i = 0; i<max; i++) {
        laugh += "ha";
    }
    return laugh
}

console.log(myLaugh(3)+"!")

//done