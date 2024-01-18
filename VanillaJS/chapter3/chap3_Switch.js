let d = new Date();
let day = d.getDay(); //일주 하루 수를 반환한다.
let dayName= "";

switch(day){
    case 0:
        dayName="일요일";
        break;
    case 1:
        dayName="월요일";
        break;
    case 2:
        dayName="화요일";
        break;
    case 3:
        dayName="수요일";
        break;
    case 4:
        dayName="목요일";
        break;
    case 5:
        dayName="금요일";
        break;
    case 6:
        dayName="토요일";
        break;
    default:
        dayName="";
        break;
}   