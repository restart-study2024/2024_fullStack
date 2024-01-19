//map() 배열의 데이터가 Object형일때, 새로운 형태의 Object로 변환해서 배열로 반환.

let userList = [{
    firstName: "재석",
    lastName: "유",
    email: "yu@gmail.com"
},
{
    firstName: "종국",
    lastName: "김",
    email: "kim@gmail.com"
},
{
    fristName: "세찬",
    lastName: "양",
    email: "yang@gmail.com"
},
{
    firstName: "석진",
    lastName: "김",
    email: "ji@gmail.com"
}
];

let userList2  = userList.map(function (user){
    return{
        fullName: user.lastName + user.firstName,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    }
});

//reduce() : 배열의 담긴 데이터를 하나씩 순회하며 callback 함수의 실행값을 누적하여 결과값을 반환
let points= [40, 100, 1, 5, 25, 10];
let sum = points.reduce(function (total, currentValue){
    return total + currentValue;
}, 0); //누적값, 현재 배열의 요소, 인덱스 번호, 배열
console.log(sum);
