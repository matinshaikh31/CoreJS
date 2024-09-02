//when we run empty js then also it create a EC and have gobal
// aboutect called this which is nothing just a window and its change as\
//per the browser beacuse each browser as different engien to run js so this === window which is a global object



//What is global space 

//every thing out of a function is at gloabl space
// var x = 10

// function b (){
//     a = 10
// }


// here x and b fn is in global space

// so when we run a empty js file it create a global object this(window) in a global space of a execution context of js



//anything created a at global space any var fn will attaced to a gloabl object this(window)




// var x = 10

// function b (){
//     a = 10
// }
// console.log(window.x)
// console.log(x)
// console.log(a)

//output
// 10
// 10
// a is not define error


// so we can acces a varibale useing winodw because it create a global object while run js and all global space value attacetd to a global object that is window 
// but we also direct call using it name it directly see the value in global object but 
// if we aces a it not in global space it is in fn thats why it through error