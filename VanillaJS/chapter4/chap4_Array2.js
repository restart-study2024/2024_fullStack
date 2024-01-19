// 1. unshift() 배열의 맨 앞 요소 추가
let fruits = ["Banana", "Orange","Apple", "Mango"];
fruits.unshift("Lemon");

// 배열요소 변경 
fruits[0] = "Kiwi";

// splice() 새로운 요소를 특정 위치에 추가 
let fruits2 =["Banana","Orange","Apple","Mange"];
fruits2.splice(2, 0, "Lemon","Kiwi"); //새로운 요소를 추가할 인덱스 번호, 요소를 추가하기전에 삭제할 요소 수 
console.log(fruits2);


// concat() 2개 이상의 배열을 하나의 배열로 결합
let arr1 = ["Cecille", "Lone"];
let arr2 = [ "Email", "Tobias", "Linus"];
let arr3 = [ "Robin", "Morgan"];
let myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);

// slice() 첫번째 파라미터 시작인덱스, 두번째 파라미트 종료인덱스
let fruits3 = ["Banana", "Orange", "Lemon" ,"Apple", "Mango"];
let citrus = fruits3.slice(3); // [Apple, Mango]
let citrus2 = fruits3.slice(1,3); // [Orange, Lemon];

// sort() 배열에 문자형 데이터가 있는 경우 오름차순 정렬
let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.sort());