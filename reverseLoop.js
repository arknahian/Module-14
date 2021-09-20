function factorial(number) {
    var fact = 1;
    for(var i = number; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}
var result = factorial(10);
console.log(result);