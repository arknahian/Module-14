function multiply(number){
    var multiplied;
    var sum = 0;
    for(var i = 1; i <= 10; i++) {
        multiplied = number * i;
        sum = multiplied + sum;
    }
    return sum;
}
var result = multiply(10);
console.log(result);