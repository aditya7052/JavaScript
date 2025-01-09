const userEmail = "adityak@g.in";
// if(userEmail){
//     console.log("Email found");
// }
// falsy values
// false , 0, -0, BigInt On, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}
// if(Object.keys(emptyObj).length === 0 ){
//     console.log("object is empty")
// }



// Nullish Calescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ??20 ?? 15 

console.log(val1)


// Terniary Operator
// condition ? true : false
const icePrice =100
icePrice <= 80 ? console.log("less than 80") : console.log("more than 80")