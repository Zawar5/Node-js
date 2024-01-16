// Singleton always created via constructors 

// There are two types to create objects 
// 1. Object constructors (object.create)
// 2. Object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Zawar",
    "full name":  "Muhammad Zawar",
    [mySym]: "mykey1",
    age: 18,
    locarrion: "Lahore",
    email: "zawar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satureday"]
}

// console.log(jsUser.name);
// console.log(jsUser[mySym]);

jsUser.email = "zawar@yahoo.com"

// console.log(jsUser.email);
// Object.freeze(jsUser)

jsUser.email = "zawar@hotmail.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js User");
}

jsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());