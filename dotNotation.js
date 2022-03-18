// console.log("Hello World!");
// console.log("hello".toUpperCase());
// console.log("hello".length);
// you should know what all of that is

// console.log(Math.ceil(Math.random()*10));
// // round up
// console.log(Math.floor(Math.random()*10));
// // round down
// console.log(Math.round(Math.random()*10));
// // round to closest

// Activity 1 with stretch, make a grid using loops and arrays -----------------------------------

const grid=["   |   |  ","-----------"]

// let i=1;
// while (i<9){
//     if (i%3!=0){
//         console.log(grid[0])
//     }
//     else {
//         console.log(grid[1])
//     }
//     i++
// }

for (let i = 1; i < 9; i++) {
    if (i%3!=0){
        console.log(grid[0])}
    else {
        console.log(grid[1])}
}

// both ways work, for loop probably better here


//  Extra activities I can't find on the slides ------------------------------

console.log("My name is Thomas Westwell")
console.log("I am 30 years old")
console.log("My star sign is Aquarius and I was born in the year of the monkey, specifically during the water cycle.")

console.log(Math.abs(-1))
// This returns the absolute number. So positive numbers or 0 are unchanged whilst negative numbers would show a positive number. like -5 would be 5

console.log("Roboworld, here I come!".substring(4,12))
// This returns a string from within a string, with the numbers indicating the start and end, none inclusive. This example will return index 5 through 11