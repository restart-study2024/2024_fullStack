// 1.replace() 문자열을 바꿈
let str ="Place visit Seoul and Seoul!";
let n = str.replace("Seoul","Jeju");
let n2 = str.replace(/Seoul/g,"Jeju"); //자바스크립트 정규식 사용. 모든 seoul 문자 변경
console.log(n2);

// 2.toUpperCase(), toLowerCase()
let text1 ="Hello World!";
let text2 = text1.toUpperCase(); //대문자
let text3 = text1.toLowerCase(); //소문자 출력

// 3.concat() 문자열 합침
let text4 = "Hello";
let text5 = "World";
let text6 = text4.concat(" ",text5); 

// 4.padStart(), padEnd() 문자를 지정된 길이만큼 추가
let str2 ="5";
str2 = str2.padStart(4,0); //0005
str2 = str.padEnd(4,0); //5000

 // 5.split() 문자열을 분리해서 배열로 반환
let birthday = "1997-02-01";
let arr2 = birthday.split("-");
console.log(arr2); //["1997","06","02"]

// 6.startWith() 문자열의 시작이 파라미터로 전잘된 문자열로 시작되는지 확인. 
let url = "http://website.com";
if(url.startsWith("http://") || url.startsWith("https://")){
    //올바른 형식의 웹 사이트 url
} else{
    // 잘못된 형식의 웹사이트 url
}

//6-1 endsWith() 전달된 문자열로 종료되는지 확인
let file = "abc.pdf";
if(file.endsWith(".pdf")){
    // pdf파일
} else{
    // 다른 형식의 파일
}

