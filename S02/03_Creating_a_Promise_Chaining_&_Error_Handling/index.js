const cart = ["shoes", "pants", "kurta"];
createOrder(cart) // orderId
  .then(function (orderId) {
    console.log(orderId);
    return orderId
    //proceed To Payment(orderId);
  })
  .then(function (orderId) {
    return producedToPaytm(orderId);
  })
  .then(function(paytmInfo){
     console.log(paytmInfo)
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function(paytmInfo){
    console.log("This run even after there is error because it is after catch")
 })

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    // createorder
    // validateCart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    // logic for createorder
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });
  return pr;
}
function producedToPaytm(){
    return new Promise((resolve,reject)=>{
        resolve("Succes Fully Paytm")

    })
}

function validateCart(cart) {
  return false;
}

//so above we craeted a promise
//the promise is created uuing new Promise((resolve,rejected)=>{})
//it take a callback function and return resolve and rected

// so in above we create our own promise in create order in which it returna prmoise that we created
//promise ha two part if the promise is succes we used resolve(); AND If it rejected then we use reslove()
// and passed erro in reslove
// now when promise is rejected it throw error in browser so we have to handel that error for this
// js provide catch it is like then
// if promise is resolve then or rejected catch
// catch(()=>{}) take a call back function


//When we chanimg the promsie at that time we have to return so that the data go 
// from upper promise to a lwer promise 


//If there is promise chain can eror come in 3 line so whole chain grt blocked but
//i9f we want to produce further insted of put catch in last we put on the three line so it only
//handel error on three line then we contiue the code 