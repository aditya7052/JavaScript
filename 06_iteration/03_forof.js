// for of
// give the value

const arr = [1,2,3,4,5]
for(const num of arr){
    // console.log(num);
}

const greetings = "Hello World!";
for(const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

//Maps
const map  = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "FRANCE")
map.set('FR', "FRANCE")
    // console.log(map);

/*In array form
Map(3) {
  'IN' => 'INDIA',
  'USA' => 'UNITED STATES OF AMERICA',
  'FR' => 'FRANCE'
}
*/

 //Without array form
for(const [key, value] of map){
    // console.log(key, ':-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
/*
it is not working for myObject
for(const [key, value] of myObj){
    console.log(key, ':-', value);
} */