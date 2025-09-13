// function CalculateCartPrice(num1){
// return num1
// }
// console.log(CalculateCartPrice(200,400,500))//200



// function CalculateCartPrice(...num1){
// return num1
// }
// console.log(CalculateCartPrice(200,400,500))//[200,400,500]



// function CalculateCartPrice(val1 , val2,...num1){
// return num1
// }
// console.log(CalculateCartPrice(200,400,500))//[500]



// const user = {
//     username: "Sanskar",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
// }
// handleObject({
//     username: "Sanskar",
//     price: 400
// })

/// noti:- user ko hum dono type se define kar sakte hai




// const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,600,700]))