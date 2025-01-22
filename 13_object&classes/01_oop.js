const user = {
  username: "Aditya",
  loginCount: 12,
  isLogin: true,
  greet: function () {
    // console.log(user.loginCount);
    // console.log(`Username: ${user.username}`);
    // console.log(`Username: ${this.username}`);
    // console.log(this);

    
  },
};
// console.log(user.username);
// user.greet();
//console.log(this);  // empty {}


function User(username, loginCount, IsLoggedIn){
    this.username=username;
    this.loginCount = loginCount;
    this.IsLoggedIn=IsLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;
}

const userOne = new User("Aditya",12,true);
const userTwo =new User("Kumar",10,false);
// console.log(userOne);
// console.log(userTwo);
// userOne.greeting();
console.log(userOne.constructor);


