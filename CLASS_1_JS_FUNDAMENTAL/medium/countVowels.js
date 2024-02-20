/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

const vowel = ['A','E','I','O','U'];

function countVowels(str) {
  let vow = 0;
  for(let i of str){
    if(vowel.includes(i.toUpperCase())){
      vow++;
    }
    console
  }
  return vow;
}
let countVow = countVowels("fefefdefwfa");
// console.log(countVow,'countVow');
// module.exports = countVowels;