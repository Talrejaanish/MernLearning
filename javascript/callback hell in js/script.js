console.log("one");
setTimeout(()=>{
    console.log("two");
},3000)



function getcandies(callback){
    setTimeout(()=>{
        console.log("Getting candies from shop");
        setTimeout(()=>{
            callback();
        },4000)
        
    },5000)
}
getcandies(function(){
    console.log("Eating candies now");
});