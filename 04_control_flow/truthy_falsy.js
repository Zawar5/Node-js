const userEmail = "arsh@gmail.com"

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user Email");
}


// Falsy Values are listed below, rest all are tuthy values
// False, 0, -0, Bigint 0n, "", null, undefined, NaN

// Surprising Truthy values
// "0", "false", " ", [], {}, function(){}

const usermail = ""

if (usermail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}



// Nullish Coalescing operator (??): null, undefined

let val1;

// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);