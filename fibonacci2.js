function fibonacci(number) {
    var numbers = [0,1];
    for(var i = 2; i <= number; i++){
        numbers[i] = numbers[i -1] + numbers[i-2];
    }
    return numbers;
}
var result = fibonacci(10);
console.log(result);