// const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNumbers.map((num) => num + 10)

// console.log(newNums);


// const newNums = myNumbers
//             .map((num) => num * 10)
//             .map((num) => num  + 1)
//             .filter((num) => num >= 40)

// console.log(newNums);


// const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc, currvalue) {
//     console.log(`accumilator: ${acc} and currentvalue: ${currvalue}`);
//     return acc + currvalue
// }, 0)


// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName: 'js',
        price: 2999
    },
    {
        itemName: 'py',
        price: 999
    },
    {
        itemN: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    },
]

const PricesTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(PricesTopay);