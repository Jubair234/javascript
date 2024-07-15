
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let numbers = 81;
let sum = 0;
while(numbers <= 131){
    
    
    if(numbers % 2 === 1){
        console.log('Odd',numbers);
        
    }
    sum = sum + numbers;
    console.log('odd sum total', sum);
   
    numbers++;
}
console.log('odd final sum total', sum);


/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let numbers1 = 206;
let sum1 = 0;
while(numbers1 <= 311){
    
    
    if(numbers1 % 2 === 0){
        console.log('Even',numbers1);
        
    }
    sum1 = sum1 + numbers1;
    console.log('Even sum total', sum1);
   
    numbers1++;
}
console.log('Even final sum total', sum1);
