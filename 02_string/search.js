//search
let message = "i love JavaScript";

console.log(message.indexOf("love"));//2
console.log(message.indexOf("JavaScript"));//7

console.log(message.lastIndexOf("a"));//10

console.log(message.includes("love"));//true

console.log(message.startsWith("love"));//false
console.log(message.startsWith("i"));//true

console.log(message.endsWith("love"));//false
console.log(message.endsWith("Script"));//true

