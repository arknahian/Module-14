// function leapYear(year) {   
//     var remainder = year % 4;
//     if (remainder == 0 && (year % 100 != 0) || year % 400 ==0) {
//         return year, "is leap year";
//     }
//     else{
//         return year, "is not a leap year";
//     }
// }
// var x = leapYear(2004);
// console.log(x);




//another way 

// function isLeapYear(number) {
//     if ((number % 4 == 0) || !(number % 400) && !!(number % 100)) {
//         return "Is Leap Year";
//     }
//     else{
//         return "Not a leap year";
//     }
// }
// var check = isLeapYear(2004);
// console.log(check);


function hello(num){
    if (!(num % 2 != 0)) {
        return "This is a decimal number";
    }
    else{
        return "This is a fraction number";
    }
}

var x = hello(101);
console.log(x);