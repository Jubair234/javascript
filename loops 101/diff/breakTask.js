/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/

// for(let i = 1; i<= 200; i++){
//     console.log(i)
//     if(i >= 100){
//         break;
//     }
    
// }


/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

// let n = 1;
// let sum = 0;
// while(n < 100){
   
//     sum = sum + n;
//     n++;
//     if(sum >= 100){
//         break;
//     }
//     console.log(sum)
    

// }


/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)


*/

for (let i = 3; i <= 100; i++) {
    // Check if i is a perfect square
    if (Number.isInteger(Math.sqrt(i))) {
      console.log("First perfect square found:", i);
      break; // Exit the loop
    }
  }
for (let i = 1; i <= 100; i++) {
    // Check if i is a perfect square
    if (Number.isInteger(Math.sqrt(i))) {
      console.log(i); // Output the perfect square
    }
  }
  
