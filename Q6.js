/*Question 5: Reverse Integer
Write a program that takes an integer as input and returns an integer with reversed digit 
ordering.
Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19. */
function countUniqueVowels(sentence) {
    var vowels = 'aeiouAEIOU';
    var foundVowels = new Set();
    for (var _i = 0, sentence_1 = sentence; _i < sentence_1.length; _i++) {
        var char = sentence_1[_i];
        if (vowels.includes(char)) {
            foundVowels.add(char.toLowerCase());
        }
    }
    return foundVowels.size;
}
// Test cases
console.log(countUniqueVowels("Hello world"));
console.log(countUniqueVowels(" onyuka peter paul "));
