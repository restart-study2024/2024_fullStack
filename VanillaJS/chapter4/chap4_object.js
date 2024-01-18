//1.Object 객체
let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 1200;
person.getFullName = function () {
  return this.firstName + " " + this.lastName;
};
console.log(person.getFullName());

//2.lenth 문자열 길이반환
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sin = txt.length;

//3.indexOf 특정문자열 인덱스 반환. 문자열을 발견하지 못하면 -1반환
let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate");
let posA =str.indexOf("locate",15); //15번째 인덱스 부터 찾기 시작
console.log(pos); //7 출력

//3-2 lastIndexOf() 찾고자 하는 문자열이 둘 이상일때 마지막 인덱스 반환
let str2 ="Please locate where 'locate' occurs!";
let pos2 = str2.lastIndexOf("locate");  

//4. slice() //시작 위치와 종료 위치를 주면, 해당 부분 잘라서 반환.
let str3 = "Apple, Banana, Kiwi";
let res = str3.slice(7,13); //banana
let res2= str3.slice(7); //banana kiwi
let res3= str3.slice(-12); //끝에서 부터 거꾸로 banana, kiwi

//4-1 substring() slice()함수와 동일. 음수 x
let str4 ="Apple, Banana, kiew";
let res4 = str4.substring(7,13);
console.log(res4);

//4-2 substr() slice와 유사
let str5="Apple, Banana, kiew";
let res5 = str5.substr(7,7);
console.log(res5);