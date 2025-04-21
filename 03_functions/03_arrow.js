const user = {
    username : "Aditya",
    price : 999,

    welcomeMessage: function (){
        console.log(`${this.username} , Welcome to website!`)
        // console.log(this)  // --> this, will print user(object)
    }

}
// user.welcomeMessage()
// user.username = "Kumar"
// user.welcomeMessage()
// console.log(this)   //--> empty object

// function chai(){
//     let username = "Aditya"
//     console.log(this.username);  //undefined
// }

const chai = () =>{
    let username = "Aditya"
    // console.log(this);  // empty object 
}
// chai()

//--> Arrow function
// const addTwo = (num1, num2)=> {
// return num1+ num2
// }


//--> implicit return 
// const addTwo = (num1, num2)=>  num1+ num2  // no curly braces
// const addTwo = (num1, num2)=>  (num1+ num2)

const addTwo = (num1, num2)=>  ({username: "Aditya"})

console.log(addTwo(3,4))


