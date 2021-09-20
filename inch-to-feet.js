
function inchToFeet(num) {
    var result = num / 12;
    if (result % 1 != 0) {
        var decimalResult = result.toFixed(4);
        decimalResult += " fraction Result";
        return decimalResult;
    }
    else{
        result += " Decimal Result";
        return result;
    }
}
var output = inchToFeet(12);
console.log(output);


