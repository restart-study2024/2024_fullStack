//number 객체

//1. toString() 숫자형 > 문자형 
let now =new Date();
let year = now.getFullYear();
let month = now.getMonth() +1 ;
let day = now.getDate();
console.log(year + "-" + month.toString().padStart(2,0)+ "-" +day.toString().padStart(2,0));

//2. toExponential() 숫자형 > 지수형
let x = 10.656;
console.log(x.toExponential(2));

//3. toFixed() 소수점 몇 번째 자리까지 보여줄지
let x1 = 10.656;
console.log(x1.toFixed(2));

//4 parseInt() 전역함수로서 정수 반환
parseInt("-10.33"); //-10
parseInt("10 years"); //10
parseInt("years 10"); //NaN

//4-1 parseFloat() "" 부동소수점 반환
parseFloat("12.33"); //12.33
parseFloat("10 20 30"); //10
parseFloat("years 10"); //NaN

console.log(Number.MAX_VALUE); //JS에서 다룰 수 있는 최대 수
console.log(Number.MIN_VALUE); //JS에서 다룰 수 있는 최소 수