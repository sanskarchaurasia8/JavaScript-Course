// function AddtwoNumbers(num1 , num2){
//     console.log(num1 + num2);
// }
// AddtwoNumbers(5,6);


// function numbers(num1 , num2){
//     let Addnumbers = num1+num2;
//     return Addnumbers
// }
// const Addnumbers =numbers(4,6);
// console.log(Addnumbers);



// function numbers(num1 , num2){
//     let Addnumbers = num1+num2;
//     return Addnumbers
//     console.log("Sanskar")// it never print because after the return function,compiler can not execute any code inside the function 
// }



// function LoginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// // console.log(LoginUserMessage("Sanskar"));
// console.log(LoginUserMessage());//undefined




function LoginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(LoginUserMessage());//undefined