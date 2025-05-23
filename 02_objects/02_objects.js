// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Aditya",
    "full name": "Aditya Kumar",
    [mySym]: "mykey1",
    age: 24,
    location: "Sasaram",
    email: "aditya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])   // mykey1

JsUser.email = "aditya@chatgpt.com"
Object.freeze(JsUser)  //--> 
JsUser.email = "aditya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    // console.log("Hello JS user");
}
JsUser.greetingTwo = function () {
    // console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());





// const tinderUser = new Object;  //singlton
const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false;
// console.log(tinderUser);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = {obj1, obj2}  //wrong
const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3)

// another way
const obj5 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj5);


const users = [
    {
        email: "aditya@gmail.com",
        name: "aditya"
    },
    {
        email: "aditya@gmail.com",
        name: "aditya"
    },
    {
        email: "aditya@gmail.com",
        name: "aditya"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//Destructure of objects
const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Aditya"
}

const { courseInstructor } = course
console.log(courseInstructor)
const { courseInstructor: instructor } = course  //changing courseInstructor to instructor
console.log(instructor)

