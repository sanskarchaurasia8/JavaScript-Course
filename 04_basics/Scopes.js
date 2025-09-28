const b = 40;

if(true){
    let a = 10;
const b = 20;
var c = 30;
// console.log("Inner:",b)
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(b)


function One(){
    const username = "Sanakar"
    function Two(){
        const website = "YouTube"
        // console.log(username)
    }
    // console.log(website)
    // Two()
}
// One()


if(true){
    const username = "Sanskar"
    if (username === "Sanskar"){
        const website = " YouTube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


// +++++++++++++++++ Intresting +++++++++++++

console.log(AddOne(5))
function AddOne(num){
    return num + 1
}

// AddTwo(5)
const AddTwo = function(num){
    return num + 2
}
