var number = 3;
for(var i =2; i < number; i++) {
    if (number % i == 0) {
        console.log("Your Number is a prime number");
        break;
    }
}
console.log("Your number is not a prime number");