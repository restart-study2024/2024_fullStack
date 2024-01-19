//Map 객체: Object와 유사
let userMap = new Map();
userMap.set("name","홍길동"); // 데이터 생성 
userMap.set("email", "abc@email.com");
userMap.set("phone", "000-0000-0000");
userMap.size //3

//get() Map객체의 데이터 읽음
userMap.get("name"); //홍길동

//has() Map에 특정 키의 값이 저장되어 있는지 확인
userMap.has("email"); //true

userMap.delete("name"); //특정 데이터 삭제
console.log(userMap);