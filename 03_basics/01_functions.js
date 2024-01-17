// function myName(){
//     console.log("Z");
//     console.log("a");
//     console.log("w");
//     console.log("a");
//     console.log("r");
// }

// myName()

// function addTwoNum(num1, num2){
//     console.log(num1 + num2); 
// }

function addTwoNum(num1, num2){
    // let result = num1 + num2
    // return result;

    return num1 + num2
}

const result = addTwoNum(3, 4)

// console.log("Result:", result);

function loginUserMesg(username){
    if(!username){
        console.log("Please enter a Username");
        return
    }
    return `${username} just Logged in`
}

// console.log(loginUserMesg("ArshMan")); 

// console.log(loginUserMesg()); 




/************    ******************/

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 600));

const user = {
    name: "Zawar",
    price: 199
}

function handleObject(anyobject){
    console.log(`User name is ${anyobject.name} and Prioce is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    name: "Arsh",
    price: 789
})


const myNewArr = [200, 400, 600, 800]

function arryfunc(getArray){
    return getArray[1]
}

// console.log(arryfunc(myNewArr));

console.log(arryfunc([200, 600, 800]));