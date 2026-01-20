const name = "shagun"
const age=10000
console.log(name);
console.log(`Hello my name is ${name} and my age is ${age}`);

// another method to declare string
const gameName = new String('shagun-mi')
console.log(gameName[0]); 
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);


const newStringOne=" shagun  "
console.log(newStringOne.trim());

const url="https://shagun.com/shagun%20"
console.log(url.replace('%20','-'));

console.log(url.includes('right'));

console.log(url.split('/'));





