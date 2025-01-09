const user = {
    username : "Aditya",
    price : 999,

    welcomeMessage: function (){
        console.log(`${this.username} , Welcome to website!`)
        // console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "Kumar"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "Aditya"
//     console.log(this.username);
// }

const chai = () =>{
    let username = "Aditya"
    console.log(this);
}
chai()

//--> Arrow function
// const addTwo = (num1, num2)=> {
// return num1+ num2
// }


//--> implicit return 
// const addTwo = (num1, num2)=>  num1+ num2
// const addTwo = (num1, num2)=>  (num1+ num2)

const addTwo = (num1, num2)=>  ({username: "Aditya"})

// console.log(addTwo(3,4))


