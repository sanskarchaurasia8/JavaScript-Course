// Immediatelu Invoked Expression (IIFE)


(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // semicoloum is very import here for end the line

( (name) => {
    //simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("sanskar")

// Note:- globle scope ke polution se bachne ke liye hamne "IIFE" ka use kiya  


