// for of loop

const arr = [1,2,3,4,5]

// for (const element of arr) {
    
// }

for (const element of arr) {
   // console.log(element);
    
    
}


const greetings = "hello world"
 for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
    
    
 }

 //Maps

 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United states of america")
 map.set('Fr', "France")

 console.log(map);

 for (const key of map) {
        console.log(key);
        
 }


 for (const [key, value] of map) {
        console.log(key, ':-', value);
        
 }

 const myObject = {
        'game1':'NFS',
        'game2': 'Spiderman'

 }
 

// for (const [element] of myObject) {
//     console.log(key, ':-', value);
    
// } // object cant be iterate by forof loop thats why it will give error



 9


