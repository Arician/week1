// let coffeeGrinding=true
// const pressGrindBeans=()=>{
//     if (coffeeGrinding==true){
//         console.log("Coffee grinding halting")
//         coffeeGrinding=false
//     }else{
//         console.log("Coffee grinding commencing")
//         coffeeGrinding=true
//     }
// }
// pressGrindBeans()

// const cashWithdrawal=(amount,accnum)=>{
//     console.log(`Wihdrawing ${amount} from ${accnum}`)
// }
// cashWithdrawal(300,83847579)
// cashWithdrawal(50,857598)
// cashWithdrawal(9001,4858769)

// const addUp=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addUp(4,6))

// activity1: rewrite old code in more modern, industry standard code. ie function over to the fat arrow notation

const factorial=(n)=>{
    if((n===0)||(n===1)){
        return 1
    }else{
        return(n*factorial(n-1))
    }
}
console.log(factorial(33))

// activity 2: edit code to include multiple parameters and having a working order count

let orderCount=0
const takeOrder=(topping,side)=>{
    orderCount++
    console.log(`Order ${orderCount}: Pizza with ${topping} and a side of ${side}`)
}
takeOrder("Hot and Spicy","Fries")
takeOrder("Hawaiian","Wings")
takeOrder("Meat Feast","dip")

// activity 3: create a funtion that checks PIN and balance before letting someone withdraw cash

let accamount=3000
accpin=7432
const cashWithdrawal=(pin,amount)=>{
    if ((pin==accpin)&&(accamount>=amount)){
        accamount-=amount
        console.log(`Withdrawing ${amount} from your account. You have ${accamount} remaining`)
    }else if(pin==accpin){
        console.log("Insufficient funds")
    }else{
        console.log("Incorrect Pin")
    }
}
cashWithdrawal(7432,200)