//변수
var x = "Hello Word!"; //동일한 변수명을 사용해도 에러 X
let y = "Hello"; //재선언 불가능
const z = "H"; //상수 (날짜, 색상)
const DATA_FORMAT = "yyyy.MM.dd";

let singleQuote ="\'He os called 'Johnny'";

//Object key-value
const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyecoloe:"blue"
};
person["age"] = 51; //데이터 변경
person.age=51;

console.log(person["fistName"]); //오타로 undefined 출력
console.log(person.firstName);
console.log(typeof {x:1, y:1}); //데이터 타입 출력

//조건(삼항)연산자
let point = 92;
let grade = (point>=90)? "A": (point>=80)? "B" : "C";

