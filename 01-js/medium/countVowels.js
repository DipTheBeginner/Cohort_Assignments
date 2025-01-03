/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    let n=0;
    let nstr=str.toLowerCase()
    for(let i=0;i<nstr.length;i++){
      if (nstr[i] === 'a' || nstr[i] === 'e' || nstr[i] === 'i' || nstr[i] === 'o' || nstr[i] === 'u') {
        n++;
    }
    }
    return n;
}

module.exports = countVowels;