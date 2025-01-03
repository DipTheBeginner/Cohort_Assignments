/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters (like spaces and punctuation)
  let nstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let len = nstr.length;

  // Use a for loop to compare characters from the start and end
  for (let i = 0; i < len / 2; i++) {
    if (nstr[i] !== nstr[len - 1 - i]) {
      return false; // If characters don't match, it's not a palindrome
    }
  }

  return true; // If the loop completes, the string is a palindrome
}


module.exports = isPalindrome;
