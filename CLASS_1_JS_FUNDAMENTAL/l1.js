// let sum = 0;
// for(let i =0;i<100000000000000;i++){
//   sum = sum + 1;
// }
// console.log(sum);

//1.) create a function which will check that how much time a setTimeout function 
//has taken in js

// function checkTimeTaken(){
//     let startTime = performance.now();
//     setTimeout(()=>{
//       let endTime = performance.now();
//       let timeTaken = endTime - startTime ;
//       console.log(`timeTaken is : ${timeTaken}`);
//     },2000);
// }
// checkTimeTaken();


// 2.) print ram ji 10 times
// const intervalId = setInterval(()=>{
//   console.log("ramji");
// },1000);

// setTimeout(()=>{
//   clearInterval(intervalId);
// },1000*10);

// 3.) create a teminal clock

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  console.clear(); // Clear the console
  console.log(`${hours}:${minutes}:${seconds}`);
}

// Update the clock every second
setInterval(updateClock, 1000);

// Call initially to display the clock immediately
updateClock();



