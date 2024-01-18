//배열의 길이가 아니라, 특정 조건을 만족하는 동안 반복문을 실행하고자 할때 효율적

let inputPrice = 7000;
let coinUnit = 500;
let coinCount = 0;

while(inputPrice>0){
    inputPrice-=coinUnit;
    coinCount++
}
console.log(coinCount);