const user={
    username:"shagun",
    price:999,
    welcomeMessage:function () {
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
        
        
    }
    
    
}
user.welcomeMessage()

console.log(this);

//function bun() {
   // let username="shagun"
   // console.log(this.username);
    
    
//}// this cannot be used in function

//chai


// Arrow function
const bun=()=>{
   let user="shagun"
    console.log(this.user);
    
}// this cannot be used here also
// bun()



// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));



//another way of writing arrow function
//const addtwonum=(num1,num2)=>num1+num2
                //or
//const addTwo=(num1,num2)=>(num1+num2) //it is called implicit return and it also use in react

//console.log(addTwo(3,4));

//console.log(addtwonum(3,4));


const addtwo=()=>({username:"shagun"})//to return object
console.log(addtwo);


