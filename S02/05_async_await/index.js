// async is keyword which is use before a function to create a async function 
//async function always return a promise 
//Either we return a promise or it automatically wrap a data in to promise

//Promise
const pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data")
    },10000)
})
// async function getData() {
//     return pr
// }
// getData().then(res=>console.log(res))



//async await 
// async await is use to handel promises

//This is How we handel promise before async await
// function data(){
//     pr.then((e)=>console.log(e))
//     console.log("Namste js")
// }
// data()

// Now we use a await keyword to handel a promsie insted of a .then 
//await is keyword which can only be use under async function
// async function dataAsync() {
//     var a = await pr
//     console.log("Namste js")
//     console.log(a)
// }
// dataAsync()

//the majo diffrent betwwen a promise .the and async await it that promise not wait for resolve
//it run code continuosly when the data get reslove than it print data
//while in async await it wait to resolve a promise and stop the code at that line 
// after promise reslove than it continue the code execution 



// example 1
// What if we have 2 await means two same promise in function ?
const pr1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data")
    },10000)
})
const pr2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data")
    },5000)
})
// async function dataAsync() {
//     var a = await pr1
//     console.log("Namste js")
//     console.log(a)
//     var a2 = await pr1
//     console.log("Namste js")
//     console.log(a2)
// }
// dataAsync()

// so both are printed at same time 


// example 2
// What if we have 2 await for 2 different promise one wait for 10sec, and another 5sec ?

// async function dataAsync() {
//     var a = await pr1
//     console.log("Namste js")
//     console.log(a)
//     var a2 = await pr2
//     console.log("Namste js")
//     console.log(a2)
// }
// dataAsync()


//so what happen when we call function it come in call stack it go to await line and it see it relove after 10 sec
//at that time that function is suspended and the call stack get empty after 10 sec the function come agian in 
//call stack than see ot reolve it print than go to next await it saw it alredy relove beacue ot take 5 sec
//then it immmedlty print
// so first prl one in run after 10 sec and then immedtly the pr2 run 
// because ithe 5 sec alredy happen but it wait to reolve first await 

// example 3
// What if we have 2 await for 2 different promise one wait for 5sec, and another 10sec ?

async function dataAsync() {
    var a = await pr2
    console.log("Namste js")
    console.log(a)
    var a2 = await pr1
    console.log("Namste js")
    console.log(a2)
}
dataAsync()

//so what happen when we call function it come in call stack it go to await line and it see it relove after 5 sec
//at that time that function is suspended and the call stack get empty after 5 sec the function come agian in 
//call stack than see it reolve it print than go to next await it saw it take 10 sec but 5 sec is left it suspend
//function call stack become empty after 5 sec it print 
//then it immmedlty print
//so first the 5 sec will run and then it wait for 5 sec than 10 sec completed than 10 sec promise is run
