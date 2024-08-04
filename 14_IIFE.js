// Immediately Invoked Function Expressions (IIFE)

// Global scope pollution causes problems often. To remove the pollution caused by variables in the global scope, we use IIFE (Immediately Invoked Function Expression).
(function chai(){
    console.log(`DB CONNECTED`);
    
})();// in order to stop context use semicolon to end the line

( function aurcode(message){
    console.log(`DB CONNECTED 2 ${message}`);
    
})('Escape the Matrix');