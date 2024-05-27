/*Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.
eg " Hello World " => returns 2*/
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
console.log(countUniqueVowels("Hello world"));
console.log(countUniqueVowels(" onyuka peter paul "));
