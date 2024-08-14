const cart = ["shoes", "Towel", "Toothpaste"];

addCart(cart, () => {
  paytm(orderId);
});
// in above the addcart get item and add to cart after that we proced to paytm so in this paytm only call when
// item ad to cart so paytm is depend on addCart and here is passing the function to add cart and control of code is in
// addCart get a control of our code

const promise = addCart(cart);
//so here we assign a addCart to a promise and any thing ootput the addCartreturn goes to promise
//Promise is nothing it just a empty object {data:value} with some data and value in it which was return by a addCart
//so addCart is async operation so it run after 5 6 second and initlity the promise has object having data which is undefine
// after the addCart exceution it return value to a promise after 4 5 sec {data:Order}

promise.then(() => {
  paytm(orderId);
});

//after we get data from promise we attached the  function to our promise object

// the main different between a callBack and promise is that in 1st we passing a function
// in a function and in this we attached a function in promise object
// and in 1st we donts have control of our code when addcart run wheneever he want it call out paytm function
// while in 2nd addCart run and return object to promise and we have control in code
//the promise give assurance that it run paytm whenever a promise have data in its object means it can run only ones

const api = fetch("fakeapi.com");

console.log(api);

// in debuuger th promise has type which is promise and have state which is pending means we donts get
// data yet and result which means the result we get from api

//when we console.log it consle promise in pending state beacuse the api in take 4 5 sec t fetch but after we open the promise
//in console it sow state fulfilled it is beacuse it console empty ojetct js not wait for nothing after 5 sec it get data then it get state full fill
//Promise has 3 state pending, fullfill, rejected
//Promise objects are immutabel it means that we cann not change data that we get in promise object

api.then((data) => {
  console.log(data);
});
// so attachng callback function we use the data of api shown above

//CallBack Hell
CreatedOrder(cart, () => {
  api.Paytm(() => {
    api.orderSummary();
  });
});

//Solving Issue of callback helll using promise chain
createOrder(orderId)
  .then(() =>{ return Paytm()})
  .then(() =>{ return orderSummary()});

//Interview Question
// 1.What is promise in js
// promise is a object which is respresenting  the eventually completion (fauiler ,fullfilledmen) of async operation
