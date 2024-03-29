// Example: 1.)

// type NumberArr = number[];

// function maxValue(arr:NumberArr){
//   let max = 0;
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(maxValue([1,2,3]));



// Example: 2.)
interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function maxValue(arr:User[]){
  let max = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].age>max){
      max = arr[i].age;
    }
  }
  return max;
}
console.log(maxValue(
  [
    {
      firstName: "Ram",
      lastName: "singh",
      age: 12
    },
    {
      firstName: "Sita",
      lastName: "Ji",
      age: 24
    }
  ]
  )
);



