function fibonacci(number) {
    var arr = [1, 1, 2];
    for(var i = 4; i <= number; i++) {
        var value1 = arr.length - 1;
        var num = arr[value1];
        var value2 = arr.length - 2;
        var num2 = arr[value2];
        var result = num + num2;
        arr.push(result);
        
    }
    return arr;
}

var x = fibonacci(10);
console.log(x);
