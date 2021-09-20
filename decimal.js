// num % 1 != 0;
function hasDecimal (num) {
	return !!(num % 2);
}
var hello = hasDecimal(4)
console.log(hello);