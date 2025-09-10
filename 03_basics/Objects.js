//singleton 
//Object.create

//object literals
const mySym = Symbol("key1");


const JsUser = {
    name: "Sanskar",
    "Full Name": "Sanskar Chaurasia",
    [mySym]: "mykey1",
    age: 20,
    Location: "Indore",
    isLoggedIn: false,
    LastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.name);//Sanskar
console.log(JsUser["Location"]);//Location
console.log(JsUser["Full Name"]);//Sanskar Chaurasia note:-There we can not access "".Full Name" we can only access "["Full Name"]"

console.log(JsUser[mySym]);//myKey1
console.log(typeof JsUser[mySym]);//string

JsUser.Location = "Chhatarpur";
console.log(JsUser.Location);//Chhatarpur
Object.freeze(JsUser);
// JsUser.Location = "Bhopal";
// console.log(JsUser.Location);//There Location will not be change because i have also freez "JsUser"

JsUser.greeting = function(){
    console.log("Hello Js user");//Hello Js user
}

// console.log(JsUser.greeting);//[Function (anonymous)]
console.log(JsUser.greeting());//undefined


JsUser.greeting2 = function(){
    console.log(`Hello Js user,${this.name}`);//Hello Js user,Sanskar
}
console.log(JsUser.greeting2());//undefined