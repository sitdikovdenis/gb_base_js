function isPrime(num) {
    var i = 2
    while (i <= Math.sqrt(num)) {
        if (num % i == 0) return false;
        i == 2 ? i++ : i += 2;
    }
    return num > 1;
}

var count = 100, number = 1;

while (number <= count) {
    if (isPrime(number)) {
        console.log(number);
    }
    number++;
}