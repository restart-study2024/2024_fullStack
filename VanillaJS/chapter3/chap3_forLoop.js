let brands = ["애플","구글","페이스북","아마존","삼성전자"];

for(let i = 0; i<brands.length; i++){
    console.log(brands[i]);
}

let productList = [
{
    name:"솔의눈",
    price:700,
},
{
    name:"커피",
    price: 700,
},
{
    name:"오렌지",
    price:"1000",
},
{
    name:"밀키스",
    price: 800,
},
]; //음료 리스트

let inputCoin = 800;
let len=productList.length;
let outputList=[];

for(let i =0; i<len; i++){
    if(productList[i].price<=inputCoin){
        outputList.push(productList[i]);
    }
    console.log(productList[i]);
    console.log(outputList)
}