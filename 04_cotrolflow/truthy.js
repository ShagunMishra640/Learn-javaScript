const userEmail="h@hitesh.ai"

if(userEmail){
    console.log("got user email");
    
}else{
    console.log("dont have user email");
    
}

//jab man lete hai kisi string ke andar koi value hai to
// use true man lete hai

/*
falsy values
false, 0 ,-0, BigInt ka 0n , "", null undefined,NaN
*/

//other values are cosider as true

//surprising truthy values
//"0",'false' , "  ",[],{},function(){}

// useEmail=[]

/*if(useEmail.length===0){
    console.log("Array is empty");
    
}*/


// const emptyObj={}
/* if (Object.keys(emptyobj).length===0){
        console.log("object is empty")
}*/

// Nullish Coalescing Operator(??): null undefined

let val1;

//val1=5??10  //in this first value 5 is value 
// val1 = null??10 //in this 10 will be assign becouse first value  is null
// val1 = undefined?? 15 // in this 15 will be assign
console.log(val1);

// this special function is designed to handle null and undefined values for dtatabase purposes if data base send that 

val1 ==null ?? 10 ?? 20 // in this 10 will be assing basically first value is assign



// Ternary operator

condition ? true: false

const iceteaprice =100

iceteaprice <= 80 ? console.log("less then 80"): console.log("more then 80");



