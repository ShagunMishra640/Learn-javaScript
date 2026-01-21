const myObject = {
    js:'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key);
    
    }  //for keys



for (const key in myObject) {
    console.log(myObject[key]);
    
    } // for values




for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    } // for both

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming ){
    console.log(key);
    
}// it will give you index numbers becouse thats  key for arrays
// in forof it give values directly but in for in it gives keys


for (const key in programming) {

    console.log(programming[key]);
    
    }// for values

    // we cant use forin for maps




