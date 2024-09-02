// function a (){
//     var b = 10
//     c()
//     function c (){
//         console.log(b)
//     }
// }

// a()
// console.log(b)


//output 
// 10 from c function
// b is not define from 10 Line


// so it happen because of a lexical environment of js
// lexical env created whenever EC created or along with EC b

// lexical env means lexical local memory along with the lexical env of   parent 

// so in above first the c function find in there lexial
// env but not find the value of b then go to parent lexical env than finb b
// but the clg in a gbola EC which has no parent lexical env so js not find b and so not define



// function a (){
//     c()
//     function c (){
//         console.log(b)
//     }
// }
// var b = 10
// a()
// console.log(b)
//Output
// 10
// 10

// in the above firts a() Excute than under that   c() find b in its local memory
//  but not find then go to parent lexica env that is  a() local memory but  not find then a()
// go to parent lexical env that is global EC and find b and clg b

//scop chain means
// the chain ofa lexical env is called a scope chain it define wheather a variable or 
// a function is present in  a scope or not