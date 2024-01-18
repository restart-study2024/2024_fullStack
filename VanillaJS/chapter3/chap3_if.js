let age = 70;
let money = 0;

if( age<=7){
    money=0;
}
else if(age>=8&age<=13){
    money=450;
}
else if(age>=14 && age<=19){
    money=720;
}
else if(age>=20 && age<70){
    money=1200;
}
else money = 0;

console.log("고객님이 내야할 돈은"+money+"입니다");