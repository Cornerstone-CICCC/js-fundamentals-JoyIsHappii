/*
Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120

12! = 12 * 11 * 10 .... * 1 = 479001600

Save your final answer in a variable called solution and print it to the console.
*/

let y = 12
for (let x = (y-1); x >=1; x--) {
    y = y * x;
}
console.log (y)