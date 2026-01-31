/**
### Task-3: 
Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

*/

let str = "I love programming and want to be a web developer";
let count = 0;

for (let i = 0; i < str.length; i++) {
    let letter_check = str[i];
    if (letter_check == 'a' || letter_check == 'e' || letter_check == 'i' || letter_check == 'o' || letter_check == 'u') {
        count += 1;
    }
}
console.log(count);