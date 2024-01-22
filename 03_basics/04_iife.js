// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // Named iife
    console.log(`DB CONNECTED`);
})();
// chai()

// Arrow Function IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Arsh')