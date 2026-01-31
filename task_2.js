/**
### Task-2: 
Count how many times a string has the letter `a` or `A`
*/

let str = "I love programming and want to be A web developer";
let count = 0;

// for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (char.toLowerCase() === 'a') {
//         count += 1;
//     }
// }
// console.log(count);

// Alternative

for (let char of str){
    if (char.toLowerCase() === "a"){
        count++;
    }
}
console.log(count);