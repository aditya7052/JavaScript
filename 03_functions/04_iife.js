// Immediately invoked function Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED Two ${name}`);
})('Aditya')