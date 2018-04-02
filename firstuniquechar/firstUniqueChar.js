function firstNonRepeatedCharacter(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.indexOf(string[i]) === i && string.indexOf(string[i], i + 1) === -1) {
            return string[i];
        }
    }
    return null;
}
let someString = 'aabcbd';
console.log(firstNonRepeatedCharacter(someString));
