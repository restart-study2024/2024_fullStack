let person = prompt("주민등록번호를 입력하세요 (예: 021211-4123456)");
// let boy = "910522-1234567"

personA = person.slice(7,8);
console.log(personA);

if(personA==1){
    var gender="boy";
    var year = "1900";
    console.log("당신의 성별은 " +gender+ "이고"+ " 태어난 년도는 "+year+ "입니다.");     
} else if(personA==2){
    var gender="girl";
    var year = "1900";
    console.log("당신의 성별은 " +gender+ "이고"+ " 태어난 년도는 "+year+ "입니다.");  
} else if(personA==3){
    var gender="boy";
    var year = "2000";
    console.log("당신의 성별은 " +gender+ "이고"+ " 태어난 년도는 "+year+ "입니다.");  
} else if(personA==4){
    var gender="girl";
    var year = "2000";
    console.log("당신의 성별은 " +gender+ "이고"+ " 태어난 년도는 "+year+ "입니다.");  
} else {
    console.log("다시 입력하세요.");
}