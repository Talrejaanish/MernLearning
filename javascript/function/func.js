function sum(a,b){
    return a+b;
}
console.log(sum(5,10));
//anonymous function
let greet = function(name){
    console.log("Hello",name);
}
greet("Anish");
//arrow function
let greet2=(name)=>{
    console.log("Hi",name);
}
greet2("Bob");
//arrow function with implicit return
let multiply=(a,b)=>a*b;
console.log("Multiplication:",multiply(4,5));
//function as callback
function processArray(arr,callback){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result.push(callback(arr[i]));
    }
    return result;
}
let numbers=[1,2,3,4,5];
let squaredNumbers=processArray(numbers,(num)=>num*num);
console.log("Squared Numbers:",squaredNumbers);
//IIFE
(function(){
    console.log("This is an IIFE");
})(); 