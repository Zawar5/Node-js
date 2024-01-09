//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



/*****************  Memory Allocation  ******************************/

// Stack (Primitive type), Heap (Non Primitive or Reference type i.e Array, Object, function)

let myName = "Muhamamad"

let otherName = myName
otherName = "Zawar"

console.log(myName);
console.log(otherName);

let userInfo = {
    userEmail : "xyz@gmail.com",
    userId : "id@xyz"
}

// console.log(userInfo);

let userTwo = userInfo;

// console.log(userTwo);

userTwo.userEmail = "abc@yahoo.com"

console.log(userInfo.userEmail);
console.log(userTwo.userEmail);