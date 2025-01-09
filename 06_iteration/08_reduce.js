const myNums =[1,2,3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)
const myTotal = myNums.reduce( (acc, currval)=>acc +currval, 0)
// console.log(myTotal)

const shoppingCart =[
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 3999
    },
    {
        itemName : "mobile",
        price : 5999
    }
]
const totalPrice = shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(totalPrice)