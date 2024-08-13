
setTimeout(()=>console.log("Matin"),5000)
console.log("N")
console.log("Shaikh")

// using callback function we can achive async operation


//REal Life Example
// in E commerce website the flow go first user add the prdoucts in carts than in 
// backend we create oreder than we prodced to paytem than after payment we show the oreder summary
//Created order ---> Produced Paytm---> Paytm Summary

// its means there is depandency in above
// in under we shw how we achive
cart = ["Shoes","Pants","Socks","Shirt"]
Api.CreatedOrder(cart,()=>{
    api.Paytm(()=>{
        api.orderSummary()
    })
})
// so using call back we created a depandency means if the items add in cart the 
// created order run and it is a job ater create order it call paytm and it work of
// paytm to call summary afer patym
//The Above Code is Also Called a CallBack Hell its means there is a call back in anotehr call back and callback


//Inversion Of Control

// its in means in above we trust the created order what is created order api dose not call or have losts of Bug 
// or its run Twice
// here using callback we give whole control of one function to another if its run than only the callback call