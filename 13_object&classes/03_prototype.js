let myName = "Aditya    ";
let myLastName = "Kumar    ";

String.prototype.truelength = function () {
  // console.log(`${this.name}`); //old syntax
  console.log(`${this}`); //reference of 

  console.log(`True length is : ${this.trim().length}`);
};
myName.truelength();

"Gupta".truelength();
"IceTea".truelength();

// -----------------------------------------
let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};
//assigning power to the object
Object.prototype.aditya = function () {
  console.log(`aditya is present in all objects`);
};

//assigning power to only arrays
Array.prototype.heyAditya = function () {
  console.log(`Aditya says hello`);
};

// heroPower.aditya();
// myHeros.aditya()

// myHeros.heyAditya()
// heroPower.heyAditya()

//Inheritance

const User = {
  name: "ad",
  email: "adit@gmail.com",
};
const Teacher = {
  makeVideo: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "js assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};
Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
