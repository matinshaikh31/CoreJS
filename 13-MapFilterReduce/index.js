//Map is Function is use to traverse array or map array element
const arr = [1, 2, 3, 4, 5];

function double(x) {
  return x * 2;
}
const output = arr.map(double);
console.log(output);

console.log(arr.map((x) => x));

//Filter is use to filter out the value base on a condition
function isOdd(x) {
  return x % 2;
}
const output2 = arr.filter(isOdd);
console.log(output2);

console.log(arr.filter((x) => x % 2));

// Reduce is use when you only get one element from array for
// eg you want largest number sum of array at that time you use a reduce

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

console.log(sum(arr));

const output3 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc
}, 0);
console.log(output3);


// so basical in reduce a callback function tak a 2 argument 1 is a
// accumlator which group the value in above function it is sum
// and the current is a current value of a array which itterart each value
// reduce take 2 argument first function and 2 is a acu value


// function sum(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum = sum + array[i];
//     }
//     return sum;
//   }
  
//   console.log(sum(arr));
  
//   const output3 = arr.reduce(function (acc, curr) {
//     acc = acc + curr;
//     return acc
//   }, 0);
//   console.log(output3);
  