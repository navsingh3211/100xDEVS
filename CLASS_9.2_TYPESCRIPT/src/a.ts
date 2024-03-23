// 1.)
// const x:number = 1;
// console.log(x);


// 2.)
// function greet(name:string){
//   console.log(`hello ${name}`);
  
// }

// greet("navnent");

// 3.) sum
// function sumNum(n1:number,n2:number):number{
//   return n1+n2;
// }

// console.log(sumNum(1,2));


// 4.) age check

// function isLegal(age:number):boolean{
//   return age>18;
// }

// console.log(isLegal(12));

// 5.) Create a function that takes another function as input, and runs it after 1 second.

function takeFunc(fn:(a:string)=>void,name:string){
  setTimeout(()=>{
    fn(name);
  },1000);
}

function greetRamji(name:string){
  console.log(`Hello ${name} ji`);
}
takeFunc(greetRamji,"Ram");



