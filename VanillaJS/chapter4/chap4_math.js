Math.round(4.9); //숫자 반올림
Math.ceil(4.2); // 5 올림처리 
Math.floor(4.9); //4 내림처리

Math.pow(8,2); //64 제곱근 값 반환
Math.abs(-4.7); // 4.7 양수로 반환
 
Math.min(0, 150, 30, 20, -8, -200); //-200
Math.max();

Math.random(); //랜덤 숫자 반환
Math.floor(Math.random()*10); //0~9 사이의 정수 
Math.floor(Math.random() * 10)+1; //1~10 사이의 정수

//랜덤 정수값에 대한 최솟값과 최대값 사이의 정수 반환
function getRndInteger(min, max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}