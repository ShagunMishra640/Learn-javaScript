// arrays

// In js arrays are resizable and theycan contain multiple elements

//array declaration
const myArr=[0,1,2,3,4]
console.log(myArr[0]);

const myArr1=new Array(1,2,3,4)
console.log(myArr1[1]);

//Array methods
myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(7)
console.log(myArr);

myArr.shift()
console.log(myArr);


console.log(myArr.includes(9));
console.log(myArr.indexOf(4));
console.log(myArr.indexOf(9));

const newArr = myArr.join()// it converts array into string
console.log(myArr);
console.log(newArr);

//slice,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)// it does not manipulate original array
console.log(myn1);
console.log("B",myArr);


const myn2 = myArr.splice(1,3)// it also manipulate original array
console.log(myn2);
console.log("c",myArr);












