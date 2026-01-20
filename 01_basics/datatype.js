"use strict";  // treat all JS code as newer version

// alert(3+3) //we are using nodejs, not browser

console.log(3+3); console.log("hello")//if we use two statements in 
// javascript in a same line we need to use semi columns.
// otherwise

console.log("hello")

let name="shagun"
let age=20
let isLoggedIn=false
let num=12345678928384n //use 'n' in end to make it bigint


//number =>2 to power 53
//bigint=>for values larger than number
//string=>""
//b00lean=>true/false
/*null=>standalone value generaly comes under object datatype and
it means variable is empty.*/
//undefined=> comes under undefined datatype
//symbol=>unique


//object

console.log(typeof age) //number
console.log(typeof(age)) //another method to know type
console.log(typeof null) //object
console.log(typeof undefined) //undefined

/*------------------------------------------------------------------------------------------------------------------------------------------------*/

// Datatype are of two types primitive and nonprimitive

// primitive
// 7 types
//String,Number,Boolean,Bigint,null(but it return object when check from typeof methdod)
//symbol,undefined

//js is dynamic type language because we dont have to give datatype explicitly.

// Nonprimitive or reference type
// Array.Objects,Funtions


const heros=["shaktiman","naagraj","doga"]; //array

// for object
let myobj={
    name:"shagun",
    age:20
}
