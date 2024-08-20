"use strict";

//this in Global space

console.log(this);
//(1) this is global object in a global space
// in browerse the global object is window

function x() {
  //(2)The value of this is depend upon a strcie mode // if it is strice
  //if it is in strice mode it value is undefined if it is not its window object
  console.log(this);
}

//(3.1)if i call like this it is undefine(stict)
x(); //it is call without any refrence of object
//(3.2)if i call it give globalObject
window.x();

//if the value of this keyword is undefined or null
//this keyword will be replaced with globalObject
//only in non strict mode because of this substitiution(Strict mode)

//(3)this keyword value is depends on how this is called(function is called)

//This in object method
//if we created a function under or in object it is called a method

const obj = {
  name: "Matin",
  printName: function () {
    console.log(this.name);
  },
};
//(3.3) Now the value of this in object become the object what it means if i do this.a means obj.a
obj.printName();

const obj2 = {
  name: "Shaikh",
};
obj.printName.call(obj2);
//apply call bind
// now i want to use obj printName method in obj2 at that time i use obj.printName.call(obj2)
// what this do this overide the value of this(this.name) to the obj passed in method

//(3.4) value of this in arrow function
//arrow functio have not there this they take this from there lexical enviornment where they enclosed

const object = {
  a:20,
  x:()=>{console.log(this)}
}
object.x()
// so bassically arrow function has not have this at arroe function this are bind in a lexical environment 
// so this will get from global sapce in above example

const object2 ={
  a:50,
  y:function(){
    const x= ()=>{console.log(this)}
  }
}
//Now in above this get from its lexical env that is from function y so functon has this so it point to the obj


