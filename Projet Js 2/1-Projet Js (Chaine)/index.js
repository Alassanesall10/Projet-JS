function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 


function countCharacters(string) {
    return string.length;
}

console.log(countCharacters("Hello"));


const capitalized = function (sentence) {
    let str = sentence.split(" ");
    for(let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}

console.log(capitalized("salut mr fall"));


