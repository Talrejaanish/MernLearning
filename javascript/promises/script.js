// const ticket = new Promise((resolve, reject) => {
//     const isoarded =false;
//     if(isoarded)
//     {
//         resolve("You are elegible");
//     }else{
//         reject("You are not elegible");
//     }
// });

// ticket.then((data)=>{
//     console.log("wohooo",data);
// }).catch((data)=>
// {
//     console.log("oh nooo",data);
// }).finally(()=>{
//     console.log("Thanks for using our services");
// });
function getcandies(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const candies="h";
        console.log("Getting candies from shop");
        resolve(candies);
    },5000);
    // resolve("success:");
    // reject("error:");
    })
}
function handovercandies(candies){
 return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        const keys="k";
        console.log("in handover candies", keys);
        resolve(candies);
        // reject("no candies to handover");
    },5000);
    // resolve("success:");
    // reject("error:");
    })
}
function onboarding(keys){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("onboarding done with keys:", keys);
        resolve(keys);
    },5000);
})}
// 
async function onboard(){
    const candy=await getcandies();
    console.log("candies received:", candy);
     const key=await handovercandies(candy);
    console.log("keys received:", key);
     const onboard=await onboarding(key);
    console.log("onboard:", onboard);
    }
onboard();

