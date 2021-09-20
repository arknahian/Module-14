// 3 != 1*2*3
function factorial(number) {
    var factorialNum = 1;
    for(var i =1; i <= number; i++) {
        factorialNum = factorialNum * i;
    }
    return factorialNum;
}

var x = factorial(7);
console.log(x);


