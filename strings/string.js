// 1. Count Vowels and Consonants in a String:

const text1 = "My name is Ashif Hassan";

const countVowelsAndConsonants = (string) => {
    let vowels = 'aeiouAEIOU';
    let vowelsCount = 0;
    let consonantsCount = 0;
    
    for (let char of string) {
        if (vowels.includes(char)) {
            vowelsCount++;
        } else if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
            consonantsCount++;
        }
    }
    
    return {vowelsCount, consonantsCount};
};

const result1 = countVowelsAndConsonants(text1);
console.log(result1);


// 2. Reverse Words in a Sentence:

const text2 = "My name is Ashif Hassan";

const reverseWords = (string) => {
    let result = '';
    let currentWord = '';
    
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        
        if (char !== ' ') {
            currentWord = char + currentWord;
        } else {
            result += currentWord + ' ';
            currentWord = '';
        }
    }
    
    result += currentWord;
    
    return result;
};

const result2 = reverseWords(text2);
console.log(result2);


// 3. Replace Each Character by Shifting n Positions:

const text3 = "Hello, World!";

const shiftCharacter = (char, n) => {
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (lowercaseAlphabet.includes(char)) {
        let newIndex = (lowercaseAlphabet.indexOf(char) + n) % 26;
        return lowercaseAlphabet[newIndex];
    } else if (uppercaseAlphabet.includes(char)) {
        let newIndex = (uppercaseAlphabet.indexOf(char) + n) % 26;
        return uppercaseAlphabet[newIndex];
    } else {
        return char;
    }
};

const shiftStringByN = (string, n) => {
    let result = '';
    
    for (let i = 0; i < string.length; i++) {
        let shiftedChar = shiftCharacter(string[i], n);
        result += shiftedChar;
    }
    
    return result;
};

const result3 = shiftStringByN(text3, 3);
console.log(result3);