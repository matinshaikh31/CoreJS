//Hosting in Js

//1

// var x = 7
// function getName() {
//     console.log("Matin")
// }

// console.log(x)
// getName() 

//OutPut:-
// 7
//Matin


//2

// console.log(x)
// getName() 

// var x = 7
// function getName() {
//     console.log("Matin")
// }


//OutPut:-
// undefine
//Matin

//Hosting means acces variable before its declaration
//it happen because before executing of code js allocate memory to each value 
//and function of js so it put varbale as undefine anf put whole function pieace of 
//code to memory and it is called hosting in js


//3

console.log(x)
getName() 

var x = 7
const getName =()=> {
    console.log("Matin")
}


//OutPut:-
// undefine
//undefine


//it happen beacuse it put call back function as varibale in memory
