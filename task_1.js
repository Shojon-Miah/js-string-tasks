/**
### Task-1: 
Count how many times a string has the letter `a`
 */

let str = "I love programming and want to be a web developer";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let letter_check = str[i];
    if (letter_check == 'a') {
        count += 1;
    }
}
console.log(count);
