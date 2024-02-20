/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let inputStr = str.toLowerCase();
  let inputStrSplit = inputStr.split("").reverse().join("");
  return inputStr === inputStrSplit
  // console.log(inputStrSplit)
  // return true;
}
let boolRes = isPalindrome("Nan");
console.log(boolRes);
// module.exports = isPalindrome;