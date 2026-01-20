const score=400
console.log(score);


// another method

const balance=new Number(100)
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8989

console.log(otherNumber.toPrecision(5));

const hundreds =1000000
console.log(hundreds.toLocaleString('en-IN'));



// we can check more methods for number from browser

console.log(Math.random()); // it give random value between 0 and 1
console.log(Math.random()*10); //it give random value btween 0 and 10
console.log((Math.random()*10)+1);//" "    "    value btween  1 and 10

const min=10;
const max=20

//it will give value btween 10 and 20 floor is used for value without decimal
console.log(Math.floor(Math.random()*(max-min+1))+min);


