// Set 객체 (값들의 집합, 유일값 보장)

// add() 배열은의 push와 같음
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1); //이미 1이 추가되어 있어 추가되지 않음.
console.log(mySet.size); // 3

// has() 특정 데이터가 저장되어 있는 지 확인
mySet.has(1); //true

mySet.delete(2); //특정 데이터 삭제 
mySet.clear(); // 저장되어 있는 모든 데이터 삭제

//forEach() set에 저장되는 모든 데이터 읽음
mySet.forEach(function (item){
    console.log(item);
})