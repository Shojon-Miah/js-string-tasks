/**
### Task-4: 
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

*/

let str = "I love X programming and wantx to be a xX developer";

const string = "The quick X brown foxX jumps over the lazy dogX.";

let newStr = "";

for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === 'x') {
        newStr = newStr + 'y';
    }
    else if (char === 'X') {
        newStr = newStr + 'Y';

    }
    else {
        newStr = newStr + char;
    }
}

console.log(newStr);

// using replace()

// let str = "The quick brown foXx jumps over the lazy dog.";

// while (str.indexOf("x") !== -1) {
//     str = str.replace("x", "y");
// }

// while (str.indexOf("X") !== -1) {
//     str = str.replace("X", "Y");
// }

// console.log(str);



// Alternative: using replaceAll()

// str = str.replaceAll("x", "y");
// str = str.replaceAll("X", "Y");
// str = str.replaceAll("x", "y").replaceAll("X", "Y");

// console.log(str);



/**
reverse -> Using Array Methods (for specific index replacement):
If you need to replace a character at a specific index, you can convert the string to an array using split(), modify the array, and then join it back into a string using join() .


*/