/*
1. Problem Statement
Let’s say you have a function that needs to return the first element of an array. 
Array can be of type either string or integer.
How would you solve this problem?
*/

//Example-1
// type Input = number | string;

// function firstEle(arr: Input[]) : Input{
//   return arr[0];
// }

// const value = firstEle(["ram","sita"]);
// console.log(value.toUpperCase());

//Example-2
// function identity<T>(arg: T): T {
//   return arg;
// }

// let output1 = identity<string>("myString");
// let output2 = identity<number>(100);
// console.log(output1,'output1');



//Example-3
// function firstEle<T>(arr: T[]) : T{
//   return arr[0];
// }

// const value = firstEle(["ram","sita"]);
// console.log(value.toUpperCase());

//Example-4

function getFirstElement<T>(arr: T[]) : T{
  return arr[0];
}

interface User4 {
  name:string
};
const value = getFirstElement<User4>([{name:"ram"},{name:"sita"}]);
console.log(value.name);




