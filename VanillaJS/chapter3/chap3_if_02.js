let age = 17;
let isAdult = false;

if(age> 18){
    isAdult = true;
}
age = 19;

if(age > 18){
    isAdult = true;
} 
else{
    isAdult =false;
}
console.log(isAdult);

let hour = 22;
if( hour < 10) {
    console.log("Good morning");
} 
else if(hour < 18){
    console.log("Good afternoon");
}
else if(hour < 21){
    console.log("Good evening");
}
else{
    console.log("Good night");
}