// if statement

const isUserLoggedIn = true
const temperature = 41

// if ( temperature === 50) {
//     console.log("executed");
// } else{   
//     console.log("Tenperature is greater then 50");
// }

// Comparison Operators:
// <, >, <=, >=, ==, !=, ===, !==


// const score = 200

// if (score > 100) {
//     const power = "Fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// Short hand notation
// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); (Not recommended this method)

// const balance = 800

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitcard) {
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}