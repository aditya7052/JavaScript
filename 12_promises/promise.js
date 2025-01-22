const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// Second Promise--------------------------
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// Third Promise--------------------------
const proiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "caai@gmail.com" });
  }, 1000);
});

proiseThree.then(function (user) {
  console.log(user);
});

// Fourth Promise--------------------------

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Aditya", password: "12345" });
    } else {
      reject("Error SOmething went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>console.log("The promise is either reject or rejected"))


// fifth Promise--------------------------
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"java", password:"234"})
        }else{
            reject('Error: Java went wrong');
        }
    },1000)
})
//asynce -> doesn't catch error. we have to use try and catch
async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive();

//using async function
/*
async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
   const data= response.json() // convert string into json
   console.log(data);
    }catch(error){
        console.log("E: ",error);
    }
}
    */
//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
}).then((error)=>console.log(error))