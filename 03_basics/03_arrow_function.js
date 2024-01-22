

const user = {
    username: "ArshMan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website.`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Zawar"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Ahamd"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Ahamd"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Ahamd"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2
const addTwo = (num1, num2) =>  (num1 + num2)

console.log(addTwo(3,4));

const myArr = [1, 2, 3, 4]

// myArr.forEach(function() {})

// myArr.forEach( () => {} )

myArr.forEach( () => () )