// fetch() => Response.json => jsonValue

// how fetch work when we fetch using it return a promise
// promise has object which we convert into json using respones.json
//json again return a promise which  have a data in json form

// //using async await
// const getdata =async ()=>{
//     const data  = await fetch(URL) //fetch api handel promise using a await
//     const jsonValue = await data.json() //convert into json and handel again using a awai

//     console.log(jsonValue) //print convert data
// }

// //using promise .then

// fetch().then((data)=>data.json()).then((data)=>console.log(data))

//using aasync await

const getData = async () => {
  try {
    const data = await fetch("https://api.github.com/users/matinshaikh31");
    const json = await data.json();
    console.log("++++++++", json);
  } catch (err) {
    console.log(err);
  }
};
getData();

//Using Promises
fetch("https://api.github.com/users/matinshaikh31")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log("-----", data);
  })
  .catch((e) => {
    console.log(e);
  });
