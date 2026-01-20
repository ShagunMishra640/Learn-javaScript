// singleton : jab bhi ham object constructer ki help se banate hai to wo singleton hota hai
// object.create

// other wise jab bhi object lterals ki help se banate hai to wo singleton nahi hota

// object literals
const mysym=Symbol("key1")// symbol declaration

const user={
    name:"shagun",
    age:18,
    [mysym]:"key2",// symbol use in object
    location:"up",
    email:"abc@gmail.com",
    "full name":"shagun",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"]

}// system stores key as a string like "name"

// console.log(user.email);
// console.log(user["email"]);// more preferable method
// console.log(user["full name"]);
// console.log(user[mysym]);// symbol print in object

user.email="shagun58348@microsoft.com"
console.log(user);

//Object.freeze(user)// this lock the object values and after that values cant change
user.email="shagun58348@google.com"
console.log(user);

user.greeting=function(){
    console.log("hello");
    
}
console.log(user.greeting());
user.greeting1=function(){
    console.log(`hello user,${this.name}`);
    
}
console.log(user.greeting1());

