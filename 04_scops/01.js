function one(){
    const username = "Aditya";
    function two(){
        const website = "Youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
// one();

if(true){
    const username ="Aditya"
    if(username == "Aditya"){
        const website = " youtube"
        // console.log (username + website);

    }
    // console.log(website);

}
// console.log(username);


addOne(5);  //it will execute
function addOne(num){
return num + 1;
}

addTwo(5);  // show error
const addTwo = function(num){
    return num + 2;
}