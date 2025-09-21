const user = {
    username: "Sanskar",
    price: 999,

    welcomeMassage: function() {
        console.log(`${this.username}, welcome to website:`);
        // console.log(this)
    }
}
// user.welcomeMassage()
// user.username = "Mayank"
// user.welcomeMassage()

// console.log( this)

// function chai(){
//     let username = "Sanskar"
//     console.log(this.username)//undefined
// }
// chai()


// const chai = function (){
//     let username = "Sanskar"
//     console.log(this.username)//undefined
// }
// chai()


// const chai = () => {
//     let username = "Sanskar"
//     console.log(this.username)//undefined
// }
// chai()


// const addTwo = (num1 , num2 ) => {
//     return num1 + num2 
// }
// console.log(addTwo(3,5))


// const addTwo = (num1 , num2 ) =>  num1 + num2 
// const addTwo = (num1 , num2 ) =>  (num1 + num2) 

const addTwo = (num1 , num2 ) => ({username: "Sanskar"})


console.log(addTwo(3,4))


const myArray = [2,3,4,5,6,7]

// myArray.forEach()