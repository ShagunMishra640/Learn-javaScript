console.log("2">1);
console.log("02">1);//Dont do this type of comparisons because js is 
//unpredicted in this type of comaprisons

console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined==0);


//also dont do these type of comparisons.
//In js equality check == and comaprisons <,>,>=,<= work differently
// comparisons convert null to a number,treating it as 0.
//Thats why (6) null >=0 is true and(4) null>0 is false.

// ===

console.log("2"===3);


