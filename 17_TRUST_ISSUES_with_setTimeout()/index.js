console.log("First")

setTimeout(function(){
    console.log("TimeOut")
},5000)

console.log("Second")


//This Function do that it run for a 10 sec and blocked the min thread

let cuurentTime = new Date().getTime()
let endTime = cuurentTime

while(endTime < cuurentTime + 10000){
      endTime = new Date().getTime()
}




//SO from above  the setTimeout will print after 5 second but it not 
// happen beacuse the main thread is blocked for a 10 sec

//what happen is first will clg than setTimeout registerd at webApi env and 5 sec time start then second will clg

// than the function run which take 10 sec so this all thing happen in call stack
// after 5 sec the setTimeOut come in callBack que from webAPi env and event loop contious watch on call back que
// and see callstack is empty or not to run call back but the function take 10 sec to run so it block the
// callstack and after 10 sec the setTimeout run

// so therefore there is a trust issue with setTimeOut



console.log("First")

setTimeout(function(){
    console.log("TimeOut")
},0)

console.log("Second")


// Know above setTimeOut is 0 know it will give out put like first Timeout 
// second but it not like this because the setTimeOut has Callbackk funtion 
// so it go to webApi env than come Callback que and then come in call stack but 
// javscript not wait for this and it will clg second