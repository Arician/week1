// let coffeeOrder=[
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ]
// console.log(coffeeOrder[2])
// coffeeOrder[1]="Ann - Vanilla Latte"
// console.log(coffeeOrder)
// console.log(coffeeOrder.length)
// coffeeOrder.push("Tom - Irish latte")
// // This adds a thing to the end of the array, pop takes the last one
// console.log(coffeeOrder)

// Activity 1: make an array of favourite songs, then use methods to add 2 and then remove the last one

let Favsongs=[
    "ラブカ？ - Ado",
    "Sforzando no Kyoza - Inori Minase",
    "Redneck - Lamb of God"
]
console.log(Favsongs)
Favsongs.push("FTP - Master Boot Record","Walpurgis Night - Xomu")
console.log(Favsongs)
Favsongs.pop()
console.log(Favsongs)

// activity 2: choose an array method and demonstrate it -------------------------------------------

let array1=[1,5,8,12]
const map1=array1.map(x => x**2)
console.log(map1)
// This lets you make a new array by doing a thing to everything in an array

// let multiplesTwo=[]
// for (let i=0; i<=20;i++){
//     if (i%2==0){
//         multiplesTwo.push(i)
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 equals ${multiplesTwo}`)

// loop activity 1: make an array of favourite films, add 2 via an array and then use a loop to cycle through them

let favFilms=[
    "Redline",
    "Shawshank Redemption",
    "Fight Club",
    "Terminator",
    "Spirited Away"
]
favFilms.push("Aliens","Ghostbusters")
for(let i=0;i<favFilms.length;i++){
    console.log(favFilms[i])
}

// loop activity 2: Generate 6 random numbers between 1 and 50------------------------------------------------

for(let i=0;i<6;i++){
    console.log(Math.round(Math.random()*49+1))
}

// loop activity 3: create a loop that counts from 9 to 0-------------------------------------------

for(let i=9;i>=0;i--){
    console.log(i)
}

// loop activity 4: create and array of 4 movies. Create a program that print all 4 seperately and reacts to the third

let films=[
    "Redline",
    "Shawshank Redemption",
    "Fight Club",
    "Terminator",
]
for(let i=0;i<films.length;i++){
    console.log(films[i])
}
if(films[2]=="Ghostbusters"){
    console.log("Yay it's ghostbusters")
}else{
    console.log("Boo, we want ghostbusters")
}

// loop activity 5: generate 6 numbers between 1 and 30 and check if they are divisible by 7

for (let i=0;i<6;i++){
    num=Math.ceil(Math.random()*29+1)
    if(num%7==0){
        console.log(`${num} is divisible by 7`)
    }else{
        console.log(`${num} is not divisible by 7`)
    }
}

// loop activity 6: create two arrays and list entries that exist in both

let bobsFollowers=["Harley","Jim","Rob","Mike"]
let hannasFollowers=["Zoe","Jim","Harley","Toby","Fred"]
for (let i=0;i<bobsFollowers.length;i++){
    for(let j=0;j<hannasFollowers.length;j++){
        if(bobsFollowers[i]==hannasFollowers[j]){
            console.log(bobsFollowers[i])
        }
    }
}

// loop activity 7: research do while loops and give and example and pros and cons of for, while, and do while loops

let num=0
do {
    console.log(`${num} squared is ${num**2}`)
    num++
}while(num<4)
// do while loop is a while loop but it checks condition at the end, which means it will absolutely always do one run of the code inside
let num2=0
while (num2<4){
    console.log(`${num2} doubled is ${num2*2}`)
    num2++
}
//while loops check the condition at the start, so won't do anything if condition isn't met at the start
// They're good for when you don't know how long things will run so want to set up conditions instead
for (let i=1;i<100;i*=2){
    console.log(`Tom has put a comma instead of a semicolon ${i} times`)
    console.log("Also he keeps making infinite loops and killing his cpu")
}
// for loops are good for doing something a number of times when you don't need complicated conditions
// Just doing things a fixed numer of times? for loop
// don't know the number but it's something simple like "once for each letter in a string"? for loop

