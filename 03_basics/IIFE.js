// ImmediatelyInvoked Function Expression(IIFE)

function chai(){
    console.log(`db connected`);
    
}
chai() // normalfunction

(function code(){
    console.log(`DB connected`);
    
})(); //global scope ke polution se bachne ke liye ise use karenge


((name) => {
    console.log(`DB connected two`);
    
})('shagun');// isme end me semicolumn bhi lagega quki ise nahi pata function end kaha hoga



// 