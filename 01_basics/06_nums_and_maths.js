const score = 400

// console.log(score);

const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString().length);

// console.log(balance.toFixed(2));

const otherNum = 23.8946

// console.log(otherNum.toPrecision(2));

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN'));



// ******************* Maths **********************

// console.log(Math);

// console.log(Math.abs(-4));

// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2));

// console.log(Math.floor(4.9));

// console.log(Math.min(4, 5, 8, 2));

console.log(Math.random()); // The value will be always in between 0 to 1

console.log((Math.random()*10) + 1); // to Avoid 0.005 type of value we can multiply .randon value with 10 and add 1 into it.

console.log(Math.floor((Math.random()*10)) + 1); // To get the smallest single number without decimel, we need to wrap math.randon with math.floor


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);