function one() {
    const username="shagun"

    function two() {
        const website="youtube"
        console.log(username);
        
    }
    
    
    two()
}
//two() //not valid
one()

if(true){
    const username="shagun"
    if(username==="shagun"){
        const website="youtube"
        console.log(username+website);
        
    }
    //console.log(website); //not valid
    
}

//console.log(username); //not valid

//--------------------------Intersting----------------------------------------------------------------


addone(5)// we can also declare fuction before definition
function addone(num) {
    return num+1
    
}


// In this we cant declare funtion before definition
const addTwo=function (num) {
    return num+2
    
}
addTwo(num)