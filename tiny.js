function tinyNumber(number) {
    var tinyNum = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < tinyNum) {
            tinyNum = element;
        }
    }
    return tinyNum;
}
var x = tinyNumber([10,3,4,5,6,8]);
console.log(x);