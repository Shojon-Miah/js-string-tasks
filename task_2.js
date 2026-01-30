/**
### Task-2: 
Count how many times a string has the letter `a` or `A`
*/

let str = "I love programming and want to be A web developer";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let letter_check = str[i];
    if (letter_check.toLowerCase()  == 'a') {
        count += 1;
    }
}
console.log(count);