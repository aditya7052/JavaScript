function SetUsername(username){
    // complex DB calls 
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername(username) // only calling 
    SetUsername.call(this, username);  //Passing references for accessing valiable from another method
    //call takes {this and passing variable } as parameter


    this.email = email
    this.password = password
}
const chai = new createUser("chai", "chai@fb.com","123")
console.log(chai);