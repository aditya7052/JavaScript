//  class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserCase(){
//         return`${this.username.toUpperCase()}`
//     }
//  }


// const chai = new User("chai","chai@gmail.com","123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUserCase());


//behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`

}

User.prototype.changeUserCase = function(){
    return`${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@gmail.com","123")
console.log(tea.encryptPassword());
console.log(tea.changeUserCase());
