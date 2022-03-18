// let weather="sunny"
// if(weather=="sunny"){
//     console.log("Wear sunscreen")
// } else if(weather=="rain"){
//     console.log("Wear a coat")
// } else{
//     console.log("Wear whatever")
// }
// // = sets things. == is soft equals. === is hard equals. Hard equals means exactly the same including datatype
// if (1==="1"){
//     console.log("truly true")
// } else if (1=="1"){
//     console.log("True")
// } else{
//     console.log("false")
// }

// let place="Manc"
// let weather="Rainy"
// if (place=="Manc" && weather=="Sunny"){
//     console.log("Don't you lie to me")
// }else if(place=="Manc" && weather=="Rainy"){
//     console.log("and the day ends in \"y\" too right?")
// }else{
//     console.log("No idea but it's probably raining in manchester")
// }
// && is and. || is or

// activity 1 with stretch, use an if statement to output correct statement based on multiple criteria--------

let age=30
let country="UK"
if(country=="UK"&&age<=18){
    console.log("You're too young to drink")
}else if(country=="UK"){
    console.log("You can drink")
}else{
    console.log("I don't know your legal drinking age")
}

// activity 2 create a switch statement to give different responses to pizza toppings----------------

let topping="special"
switch(topping){
    case "special":
        console.log("A bit of everything. The way forward")
        break
    case "meatfeast":
    case "hot and spicy":
        console.log("The good stuff")
        break
    case "margerita":
    case "four cheese":
    case "pepperoni":
    case "vegetarian":
        console.log("Basic choices. Disapointing")
        break
    case "tuna":
    case "anchovies":
        console.log("Weird choice. I like it")
        break
    case "hawaiian":
    case "pineapple":
        console.log("get out")
        break
}

// activity 3 check password is long enough --------------------------------------------

let password="Password1"
if (password.length<8){
    console.log("Your password is too short")
}else{
    console.log(`Your password is ${password}`)
}

// activity 4, check if a number is divisible by 3 or 5

let num=72
if(num%5==0||num%3==0){
    console.log("72 is divisible by 5, by 3, or by both")
}else{
    console.log("Not divisible by either lol")
}

// activity 5, check if a number is divisible by 3, 7, both or neither and give different responses for each

let num2=172
if (num2%5==0 && num2%3==0){
    console.log("fizzbuzz")
}else if(num2%5==0){
    console.log("buzz")
}else if(num2%3==0){
    console.log("fizz")
}else{
    console.log("num")
}

// activity 6: Check if a number is a palindrome

let num3=10101
num3=num3.toString()
num3=num3.split()
if (num3==num3.reverse()){
    console.log("This number is a palindrome")
}else{
    console.log("This number is not a palindrome")
}

// activity 7: print statements of where you currently are based on a variable called time

let placeOfWork="Manchester"
let home="Salford"
let time=18
if(time>8&time<18){
    console.log(`I am at work in ${placeOfWork}`)
}else if(time>7&&time<19){
    console.log(`I am currently commuting between ${placeOfWork} and ${home}`)
}else if(time<0||time>24){
    console.log("I apparently exist beyond time and space")
}else{
    console.log(`I am at home in ${home}`)
}

// activity 8 find the index of the last vowel in a string

const vowel=["a","e","i","o","u"]
let counter=0
let vcounter=0
let string="jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
for(let char of string){
    if (vowel.includes(char)){
        vcounter=counter
    }counter++
}console.log(`The last vowel is in index ${vcounter}`)

// Messy, but does the job. Could have used other keywords to get similar results

// activity 9: check if the first and last letter of a word are the same------------------------------------------

let word="kayak"
if(word[0]==word[word.length-1]){
    console.log("True")
}else{
    console.log("False")
}

// activity 10: check the sum of two numbers. If it is even return the sum, if it is not return the numbers multiplied

let num4=1
let num5=2
if((num4+num5)%2==0){
    console.log(num4+num5)
}else{
    console.log(num4*num5)
}