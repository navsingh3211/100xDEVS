/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = numbers[0];
    for(let ele of numbers){
      if(ele>max){
        max = ele;
      }
    }
    return max;
}
const result = findLargestElement([-1,-4,-6,-3,-9]);
console.log(result,'result');
// module.exports = findLargestElement;