// Immediately Invoked Function Expressions (IIFE)
//Why IIFE?
//1. to immediately use function
//2. global scope ke pollution se protect krne ke liye


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

