let name = "      Sanskar Chaurasia     ";

console.log(name.trim());//"Sanskar Chaurasia"
console.log(name.trimStart());//"Sanskar Chaurasia     "
console.log(name.trimEnd());//"     Sanskar Chaurasia"

let greet = "hello world";
console.log(greet.replace("world","js"));//hello js
console.log(greet.replaceAll("l","Y"));//heyyo woryd
console.log(greet.repeat(3));//hello worldhello worldhello world
console.log(greet.concat(" ","first program"));//hello world first program