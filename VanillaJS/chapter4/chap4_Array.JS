//Array 객체

//1.toString()
let fruits = ["Banana","Orange","Apple","Mango"];
fruits.toString(); // Banana,Orange,Apple,Mange

//2. join() 지정된 문자를 이용해 하나의 문자열로 반환
let fruits2 =["Banana","Orange","Apple","Mango"];
console.log(fruits.join(" * ")); //Banana * Orange * Apple * Mange

let userHtml=[];
for(const user of userList){
    userHtml.push("<tr>");
    userHtml.push("<td>" + user.name + "</td>");
    userHtml.push("<td>" + user.email + "</td>");
    userHtml.push("</tr>"); //tr태그 배열에 넣음
}
document.getElementById("userTableTbody").innerHML = userHtml.join('');

//3. pop() 배열의 마지막 데이터 제거하고, 마지막 데이터 반환.
let fruits3 =["Banana","Orange","Apple","Mango"];
let x = fruits3.pop(); //x= Mango

//3-2 push() 배열에 새로운 요소 추가
let fruits4 = ["Banana","Orange", "Apple" , "Mango"];
fruits4.push("Kiwi"); //kiwi가 fruits4 배열에 추가 


//3-4 shift() LIFO 첫번째 요소 제거 및 반환
fruits4.shift(); //"Banana"를 fruits4 배열에서 제하고 반환