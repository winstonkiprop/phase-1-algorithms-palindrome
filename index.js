function isPalindrome(word) {
  // Write your algorithm here
  let l = word.length;
  for (let i = 0; i < l/2; i++) {
   if (word[i] !== word[l - 1 - i]) {
    return false;
   }
  }
  return true;
  }
  

/* 
  Add your pseudocode here
// write a function called is palindrome & pass one parameter
//use a for loop to check to iterate over the characters of the word
use an if statement to check if the first and the last characters of the word if they match
if they match === the word is palindrome (true)
else !===palindrome(false)

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
