const myArr = [0,1,2,3,4,5];
const myHeros = ["Doraemon,Slugtera,Pokemon"];

const myArr2 = (1,2,3,4);

console.log(myArr[1]);//1

//Array Method

myArr.push(6);
console.log(myArr);//[0,1,2,3,4,5,6]

myArr.pop();
console.log(myArr);//[0,1,2,3,4,5]

myArr.unshift(7);
console.log(myArr);//[7,0,1,2,3,4,5]
myArr.shift();
console.log(myArr);

console.log(myArr.includes(6));//false
console.log(myArr.indexOf(5));//5

const newArr = myArr.join();

console.log(myArr);
console.log(newArr);//0,1,2,3,4,5
//Note- "join" convert Array to String

console.log(typeof newArr);//String

console.log("A" ,myArr);//A [0,1,2,3,4,5]

const myn1 = myArr.slice(1,3);
console.log(myn1);//[1,2]
console.log("B",myArr);//B [0,1,2,3,4,5]

const myn2 = myArr.splice(1,3);
console.log(myn2);//[1,2,3]
console.log("c", myArr);//C [0,4,5] there splice left from here.