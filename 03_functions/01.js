function sayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}
//sayMyName();

// function addTwoNumbers(number1, number2)//parameters
// {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2)//parameters
{
    let result = number1 + number2
    return result;
    
}

const result = addTwoNumbers(3,5); //arguments
// console.log("Result : "+result)

function loginUserMessage (username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage("Aditya"));

