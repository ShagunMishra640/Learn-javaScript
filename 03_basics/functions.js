function sayMyName(){
    console.log("shagun");
    
}// Definition

sayMyName()

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
    
}

addTwoNumbers(3,4)

function addTwoNumbers1(number1,number2){
    console.log(number1+number2);
    return number1+number2
}

const result=addTwoNumbers1(6,4)
console.log(result);



function login(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} is logged in`
}
//console.log(login("shagun"));
console.log(login());



function userlogin(username="sam"){//default value if value is not passed
   
    return `${username} is logged in`
}
//console.log(login("shagun"));
console.log(userlogin());


function calculateCartPrice(...num1) {
    return num1
    
}
// ...num1 is a rest or spread operator used to take multiple values by using single variable
console.log(calculateCartPrice(10,20,30));


function calculateCartPrice1(val1,val2,...num1) {
    return num1
    
}
// ...num1 is a rest or spread operator used to take multiple values by using single variable
console.log(calculateCartPrice1(10,20,30,40,50));




//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// function with object

const user = {
    username:"shagun",
    price:30
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
    
}

handleObject(user)

// we can directly pass object
handleObject({
    username:"sam",
    price:400
})


const myNewArray=[20,30,40]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));

//we can dierctly pass array also
console.log(returnSecondValue([200,300,400]));
