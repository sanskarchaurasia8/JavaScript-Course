const coding =  ["js","rb","py","java","cpp"]

// coding.forEach( function (item) {
    // console.log(item)
// })


// coding.forEach((item) => {
//     console.log(item)
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


// coding.forEach((item, index , array) => {
//     console.log(item , index , array);
// })


const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

mycoding.forEach((item) => {

    console.log(item.languageName)
})