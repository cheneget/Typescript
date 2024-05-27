/*Question 5: Reverse Integer
Write a program that takes an integer as input and returns an integer with reversed digit
ordering.
Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19.*/
var reverseInteger = function (num) {
    var reversedStr = Math.abs(num).toString().split('').reverse().join('');
    var reversedNum = parseInt(reversedStr) * Math.sign(num);
    return reversedNum;
};
console.log(reverseInteger(500));
console.log(reverseInteger(-56));
console.log(reverseInteger(-90));
console.log(reverseInteger(91));
