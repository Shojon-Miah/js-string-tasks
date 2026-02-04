/**
### Task-3: 
Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u`.

*/

let string = "I love programming and want to be a web developer";

let str = "The quick brown fox jumps over the lazy dog";


//let str = "education";
str = str.toLowerCase();

if (
  str.includes("a") &&
  str.includes("e") &&
  str.includes("i") &&
  str.includes("o") &&
  str.includes("u")
) {
  console.log("All vowels are present");
} else {
  console.log("All vowels are NOT present");
}
