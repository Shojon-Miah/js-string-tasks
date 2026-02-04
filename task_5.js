/**
### Task-5:
Capitalize Every first Letter of each word in a String
*/

let str = "i love javascript programming";

let words = str.split(" ");
let result = [];

for (let word of words) {
  let capitalWord = word[0].toUpperCase() + word.slice(1);
  result.push(capitalWord);
}

let finalString = result.join(" ");
console.log(finalString);


/***

italizeWords(str) {
  // Split the string into an array of words
  const words = str.split(' ');

  // Iterate over the array and capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  // Join the words back together with spaces
  return words.join(' ');
}

// Example usage:
const originalString = "i capitalize every first letter of each word";
const capitalizedString = capitalizeWords(originalString);
console.log(capitalizedString); 
// Output: "Capitalize Every First Letter Of Each Word"

*/