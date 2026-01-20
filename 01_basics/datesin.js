// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());


let myCreatedDate1=new Date("01-14-2025")
console.log(myCreatedDate1.toLocaleString());


let myCreatedDate2=new Date("2025-01-15")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()//it will give milli sconds unto current date
                // or
console.log(Date.now());

console.log(myTimeStamp);

console.log(myCreatedDate2.getTime);// it give milli second upto given date

console.log();

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);// it starts month from 0 thats why we add 1 for end user
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})// In this wecan make cbject to use mulltiple methods
