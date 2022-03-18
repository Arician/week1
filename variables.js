// let firstName="Tom"
// // let can be changed easily
// const mood="tired"
// // this can not be changed really
// var age=30
// // can also be changed, but considered legacy and shouldn't really be used anymore.
// console.log("My name is",firstName,". I am ",age,"and I am",mood)

// let i=10
// i+=2
// console.log("10+2 is",i)
// i-=4
// console.log("12-4=",i)
// math operators but with = for like plus equals stuff to change variables quicker

// let firstName="Tom"
// let age=30
// let mood="tired"
// console.log(`Hi my name is ${firstName}. I am ${age} years old and I am ${mood}`)

// Activity 1 with stretch. Store name, age and, favourite colour. Log, update and then log again -------------------- 

let name="Thomas"
let age=29
let favouriteColour="purple"
console.log(`I am ${name}, I am ${age} years old and my favourite colour is ${favouriteColour}`)
name="Tom"
age=30
favouriteColour="black"
console.log(`I am ${name}, I am now ${age} years old and my favourite colour is now ${favouriteColour}`)

// activity 3: Calculate the number of days between now and my last birthday

const birthday=new Date(2022, 1, 16)
let now=new Date()
let difference=now-birthday
difference/=(1000*60*60*24)
difference=Math.floor(difference)
console.log(`It has been ${difference} days since my birthday`)

// activity 4, create a variable for each space in a grid and then print the grid

let space1="x"
let space2="o"
let space3="o"
let space4="o"
let space5="x"
let space6="o"
let space7=" "
let space8="o"
let space9="x"
console.log("   |   |   ")
console.log(` ${space1} | ${space2} | ${space3} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space4} | ${space5} | ${space6} `)
console.log("   |   |   ")
console.log("-----------")
console.log("   |   |   ")
console.log(` ${space7} | ${space8} | ${space9} `)
console.log("   |   |   ")
