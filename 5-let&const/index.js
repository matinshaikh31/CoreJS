// console.log(a)
// console.log(b)

// var a =10
// let b = 100

//Output 
// a is undefined
// b cannot acces before iniliziation


//this is because var hosting store in the GEC memory while let hosted store in different 
//memory call script in scope

//temproal deadZone
// when a let hosted in memory till it initilize the time between them called Temproal deadZone
// it means when GEC created memory inilitzed  to each value and in code execution the value asing to that let
// the time between the memeory inilized and code execution called temproal deadzone
// temproal dead zone only happen with let and const
// in above for a every thing is in temproal deadzone before it inilization


// different between type error ,refrence error and sytnax error

// Type Error
// const a =10
// a=10
// above code give type error because const value can be assign during its inilization

//Refrance Error
// var a= 10
// console.log(b)
//above give a refrance error we cannot access the value that are not in memory

//Syntax Error
// let a =200
// let a=20
//sytnax error means error in writing code let canto be decale another value after inilize one value



//Different Betwwen Var,Let,Const

// var vairabel can be decaler multiple value and can change
// var a=10
// var a=100 it is possible in var
// and it is hosted in js but its store in gobal memeory

//let can not declare multiple value for eg
// let a =10
// let a =100 it is not possible it give syntax error
// and it is hosted in js but its not store in gobal memeory it store in difrrent memeory of scope

//const value can be decalare during its inilization
// for eg const a = 10

//not possible
// const a;
// a=10 its give type error

//let and const are blocked scope
// they are store in seprate memory space in scope
//let and const are come in blocked scoped while var come in global scope in memory