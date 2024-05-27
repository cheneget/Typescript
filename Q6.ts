/*Question 6: Count Vowels
Write a program that counts the number of vowels in a sentence.
eg " Hello World " => returns 2*/
function countUniqueVowels(sentence: string): number {
    const vowels = 'aeiouAEIOU';
    const foundVowels = new Set<string>();

    for (let char of sentence) {
        if (vowels.includes(char)) {
            foundVowels.add(char.toLowerCase());
        }
    }

    return foundVowels.size;
}

// Test cases
console.log(countUniqueVowels("Hello world"));
console.log(countUniqueVowels(" onyuka peter paul ")); 
