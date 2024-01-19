let a = 100
// const b = 20
// var c = 300

if(true){
    let a = 10
const b = 20
var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);




// ***************  Nested Scope ******************************


function one(){
    const username = "Arsh"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}
one()




if(true){
    const username = "Arshman"

    if(username === "Arshman"){
        const website = " Facebook"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

function addOne(num){
    return num + 1
}
addOne(5)

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));