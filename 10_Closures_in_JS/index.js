function x (){
    var a =10
    function y(){
        console.log(a)
    }
    y()
}
x()


// function along with lexical scope form clouser 
// its means in abve function y is bundel with the lexical scope of its parent which is function x
//function along with its lexical bundel called clouser


function x (){
    var x =10
    function y(){
        console.log(x)
    }
    return y
}
var z =  x()
console.log(z)
z()
// know when we get function x from z it return function y and x function gone 
// from call stack so we can not get the value of a on call function x 
// but we get because when we return the function from another function it return with whole clouser with its lexical env
// so in js function knowa where they are come from