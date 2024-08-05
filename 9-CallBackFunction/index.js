setTimeout(function(){
    console.log("Hi")
},5000)

function x (y){
    console.log("x")
    y()
}

x(function y (){
    console.log("y")
})

//Output
// x
// y
// hi


//creating a function in another function called a callback function in above we created a y fn in x fn
//call back fn allow us to write async code in js
//the setTimeout Is possible because of call back Function 
// FCF means ability of function passing into another function which is also called callback function
//JS HAS Only one callstack which is excute as a main thread
// everthing excute in page or in browser  is throug callStack Only 
//Any large operation which take time to excecute in this call stack can block the callstack
// which is  called blocking the main thread
// for this we always use async for the things or a operation which take more time 