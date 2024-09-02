var x = 1
a()
b()
console.log(x)

function a(){
    var x = 10
    console.log(x)
}
function b(){
    var x = 100
    console.log(x)
}

//Output
//10
// 100
// 1


// it is beacuse js create execution context for each function and afetr its complition EC Remove from CAll Stack
//Each EC Has Own Memory Space