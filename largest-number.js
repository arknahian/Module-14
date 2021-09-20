function largestNumber(array) {
    var largeNum = array[0];
    for(var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element > largeNum) {
            largeNum = element;
        }
    }
    return largeNum;
}
var x = largestNumber([1, 2, 3, 4]);
console.log(x);