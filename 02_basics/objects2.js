const tinderUser=new Object()// singleton object
const tinder={}//non singleton user
tinder.id = "123abc"
tinder.name = "sam"
tinder.name = "false"

//console.log(tinder);

const regularUser = {
    email:"somegoggle.com",
    fullname:{
        userfullname:{
            firstname:"shagun",
        lastname:"mishra"
       }
    }
}

console.log(regularUser.fullname.username.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"7"}

// const obj4={obj1,obj2}
// console.log(obj4);

//const obj4=Object.assign({},obj1,obj2)
//const obj5=Object.assign({},obj1,obj2,obj3)
//console.log(obj4);
//console.log(obj5);

const obj4={...obj1,...obj2}
//console.log(obj4);


const users=[{
    id:1,
    email:"a@gmail.com",

},
{
    id:2,
    email:"b@gmail.com",

},
{
    id:3,
    email:"c@gmail.com",

},
]

users[1].email//user to access objects inside array
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));//In output fist element is key and other is value

console.log(tinder.hasOwnProperty('isLogged'));// it will give ans in bollean whether value is present or not



const course ={
    coursename:"js",
    price:999,
    Instructer:"shagun"
}

//course.Instructer


//Destructuring
const{Instructer}=course//after that we dont have to write course.Instructer completely
console.log(Instructer);
const{Instructer:Ins}=course//we can also assign smallname to a variable also for use
console.log(Ins);// it will give same result as Instructer



