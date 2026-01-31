/**
### Task-5:
Capitalize Every first Letter of each word in a String
*/


/***
To capitalize the first letter of each word in a string using JavaScript, the process involves splitting the string into an array of words, capitalizing the first letter of each word, and then joining the words back into a single string.
*/


function capitalizeWords(str) {
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
const originalString = "capitalize every first letter of each word";
const capitalizedString = capitalizeWords(originalString);
console.log(capitalizedString); 
// Output: "Capitalize Every First Letter Of Each Word"
