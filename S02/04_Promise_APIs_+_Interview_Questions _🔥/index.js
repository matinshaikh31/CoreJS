const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Suucees"), 1000);
  setTimeout(() => reject("P1 Rejected"), 1000);
});
const p2 = new Promise((resolve, reject) => {
//    setTimeout(()=>resolve("P1 Suucees"),3000)
  setTimeout(() => reject("P2 Rejected"), 3000);
});
const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("P3 Suucees"), 5000);
  setTimeout(() => reject("P3 Rejected"), 1000);
});

//1 Promise.all([p1,p2,p3])

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promise.all is use to handel multiple promise , multilple api call,
// it take array of promise as input Promise.all([p1,p2,p3])
// what it do it make three parralle api call or run 3 promises parralle
//even though it make api call or run promises parrelle it wait to complete all promises than only it
//return a array of result ,it a case od al promise get success eg p1 take 1 sec p3 take 5 sec and p2 take 3 sec
//it return array result after 5 sec
//arr[r1,r2,r3]

//What if one promise get recjected at that time promise.all through error of that particular promise and
//it not wait for another promises to execute for eg eg p1 take 1 sec p3 take 5 sec and p2 take 3 sec
//if p1 has error it through error of p1 after 1 sec it not wait or not complete another promises
// Thus, if all promise get resolve it give array of result or if anyone get recjected promise.all
// give errro and not run any promises or not give any rseult

//2 Promise.allsetteled([p1,p2,p3])

// Promise.allSettled([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
//for the Above solution we have promise.allsetteled()
//it same as promise.all if all promise or api called get succes
//but it is different when anyone of promise or api call rejected
// for eg eg p1 take 1 sec p3 take 5 sec and p2 take 3 sec it p1 get reject it wait for all promises to setteld
// and after 5 sec it give result arr[error,r2,r3] it give result of all promise or api call
// it give result if succes or error if rejected

//3 Promise.race([p1,p2,p3])
// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
//what it means the promise who win the race firts that it give the value or result of that promise
//it means the promise which get first setteled it will give us a result for eg eg p1 take 1 sec p3 take
// 5 sec and p2 take 3 sec  at this p1 return tha value of result first it not give arry of result it give value
// (r1)

//What if first promise who win race get rejected insted of setteled
//so it throgh error
//the firts promise which run get return s result it not wait to complete other promises
//it just return a resul of the firts promise which get first setteled

//4 Promise.any([p1,p2,p3])
Promise.any([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((e) => console.log(e.errors));
//it wait for the first setteld resolve promise
//it is same as promise.race but the major different is if we get error from first promsise than it wait for another
// promise to relove and only display or return  the first setteled promise value
// for eg eg p1 take 1 sec p3 take 5 sec and p2 take 3 sec
// if p1 setteled it return result form p1 but if it get reject then it is wait for 3 sev to setteled or resolve the
// p2 and then it return p2 result but if it is also rejected than it go to p3 and after 5 sec it return a resullt of p3

//What if every thing is fail
//if all promise get rejected it through a error but not simple error through aggregate-error
// aggregaetError are the array of all 3 error [e1,e2,e3]
//The AggregateError object represents an error when several errors need to be wrapped in a single error
