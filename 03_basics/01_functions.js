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

console.log(loginUserMesg()); 