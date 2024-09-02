//Function Statement or Function Declartion

function a (){
    console.log("HI a")
}
//This Way Of Creatig a function is called function statement


//Function Expression
var b = function (){
    console.log("Hi b")
}
// This Way Of declaring a function called a Function Exprssion
//Here Function acts like a value
//The major different between the fn statment and fn expression is hosting

//Anonyomus function means assign a function to a variable


//Named Function Expression
var b = function NFE (){
    console.log("Hi b")
}

//Paramaerts & Argument
// function matin(paramets){
// }
// matin(argument)

//First Class Function

function FCF(params){
    console.log(params)
}

FCF( function(){
    console.log("hi")
})

// FCF means the ability to use function as parametrs and value called FCF e.g above

function FCF2(){
    return function (){
        console.log("Hi")
    }
}

// another eg above of FCF
//FCF means ability of function passing into another function