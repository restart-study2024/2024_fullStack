function add(n1, n2){
    return n1 + n2;
}

function minus(n1, n2){
    return n1-n2;
}

function multpie(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1/n2;
}

function calculator(n1, n2, operator){
    if(operator == "+"){
        return add(n1,n2);
    }
    else if(operator == "-"){
        return minus(n1,n2);
    }
    else if(operator == "*"){
        return multpie(n1,n2);
    }
    else if(operator == "/"){
        return divide(n1,n2)
    }
}

// 변수에 함수 할당
let sum = function(p1, p2){
    return p1+p2;
}
sum1 = sum(21,24);
sum2 = sum(7, 16);
console.log(sum1);

//function 생성자

let sumA = new Function("p1","p2","return p1 + p2;");
let sumA1 = sum(21,24);
console.log(sumA1);