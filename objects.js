// const person={
//     name: "Tom",
//     age: 30
// }
// console.log(person)
// console.log(person.name)
// console.log(person.name.length)
// person.faveSongs=["「ラブカ？」","Metanoia","Sforzando no Kyoza"]
// // this adds things to the object above
// console.log(person.faveSongs)
// run this, you should work it out

// const alarmSettings={
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"
// }
// let alarm="not set"
// let day="Saturday"
// const setAlarm=()=>{
//     if (day=="Saturday"||day=="Sunday"){
//         alarm=alarmSettings.weekendAlarm
//     }else{
//         alarm=alarmSettings.weekdayAlarm
//     }
//     console.log(alarm)
// }
// setAlarm()


// Activity 1: create an object with a function inside (functions inside objects are methods for that object)

const person={
    name: "Tom",
    age: 30,
    sayHi(){
        return `Hello my name is ${this.name}`
    }
}
console.log(person.sayHi())

// activity 2: create an object with 2 methods---------------------------------------------------------

const pet={
    name: "Bubbles",
    typeOfPet: "Budgie",
    age: 6,
    colour: "Blue",
    eat:()=>{
        return `${pet.name} is currently eating`},
    drink:()=>{
        return `${pet.name} is currently drinking`}
}
console.log(pet.eat())
console.log(pet.drink())

// activity 3: create a coffeeShop object with a branch name, and food and drink with prices. log a reciept

let total=0
let order=[]
const coffeeShop={
    branch: "Duncan Hills Coffee House",
    food: {
        baconSandwhich: 3,
        sausageSandwhich: 2,
        quiche: 4
    },
    drink: {
        coffee:2,
        tea: 2.50,
        coke:1.50,
    },
    drinksOrdered(...drink) {
      let cost = 0;
      const drinkStr = drink.join(' & ');
      drink.forEach(drink => (cost += this.drink[drink]));
      cost = cost.toString().split('.');
      cost = cost.join('.');
  
      return this.displayOrder(drinkStr, cost);
    },
  
    foodOrdered(...food) {
      let cost = 0;
      const foodStr = food.join(' & ');
  
      food.forEach(item => (cost += this.food[item]));
  
      cost = cost.toString().split('.');
      cost = cost.join('.');
  
      return this.displayOrder(foodStr, cost);
    },
  
    displayOrder(order, cost) {
      return console.log(`Your order is ${order}. Total - £${cost}.`)
      }
}
coffeeShop.drinksOrdered(`coffee`,`tea`,`tea`)
coffeeShop.foodOrdered(`baconSandwhich`,`baconSandwhich`)


// spent into the middle of the night on this. My examples don't quite line up and I don't like how it seperates them out quite like that.
// was overcomplicating this for a long time. Not knowing about the (...) was rough. As was not knowing about .forEach. They kinda revolutionised this for me.
// This is overall the third attempt. The first attempt was something like this but with twice as many functions and using arrays and awkward use of index positions
// second attempt treated the food and drink options like an order instead of like a menu
// This I don't like but maybe it answers the brief? Maybe I'm overthinking? Kind of wanted something that prints out one order with one total
// It'd list food first and then drinks, so they'd be ordered for easy reading like an actual reciept.
// not sure how I'd do that and still meet the brief of having 2 methods. Maybe by having the first methong log the first half of the reciept and the second log the second half?
