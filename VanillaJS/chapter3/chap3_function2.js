let tax = calculatorTax(10000); //매출액 10000원을 파라미터로 전달

function calculatorTax(salesPrice){
    let vat = 0.12;
    let tax = salesPrice * vat;
    return tax;
}

//계산기

function calculator(x1, x2, operator){
    if(operator == "+"){
        return x1+x2;
    } else if(operator =="-"){
        return x1-x2;
    } else if(operator =="*"){
        return x1*x2;
    } else if(operator == "/"){
        return x1/x2;
    }
}

let plus = calculator(5, 7, "+");
    console.log(plus);

let minus = calculator(5, 7, "-");
    console.log(minus);

let multpie = calculator(5, 7, "*");
    console.log(multpie);

let divide = calculator(10,2,"/");
    console.log(divide);