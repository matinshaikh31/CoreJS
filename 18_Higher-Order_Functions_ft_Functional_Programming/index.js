//Higher Order Function are a function which take function as arugument and return a function

function x (){
    console.log("Call Back Function")
}

function y (x){
    x()
}

// in above y is takin x as an arugument so y is a higher order function and x is a call back function




const raidus = [10,20,59]


const calulateArea = function (radius){
    const area = []
    for(i=0;i<raidus.length;i++){
            area.push(3.17 * (raidus[i]*radius[i]))
    }
    return area
}

console.log(calulateArea(raidus))

const calulateRadius = function (radius){
    const area = []
    for(i=0;i<raidus.length;i++){
            area.push(2 * radius[i])
    }
    return area
}

console.log(calulateRadius(raidus))


const calulateCircum = function (radius){
    const area = []
    for(i=0;i<raidus.length;i++){
            area.push(2 * 3.14* radius[i])
    }
    return area
}

console.log(calulateCircum(raidus))



// in the above  all three have function 90% same just formula are difrent so it is not a optimized way of written a code


//Under i write the optimizee way 0f wriiten a code in under we abtract the logic from function and put the logic from outside 

const area = function (radius){
    return 3.17 * (radius*radius)
}
const diam = function (radius){
    return 2 *radius
}
const calulate = function (radius,logic){
    const area = []
    for(i=0;i<raidus.length;i++){
            area.push(logic(raidus[i]))
    }
    return area
}

console.log(calulate(raidus,area))
console.log(calulate(raidus,diam))