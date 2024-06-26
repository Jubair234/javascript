/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1 = 15;
const num2 = 82;
let result = 0 ;
// if(num1 > num2){
//     result = num1 * 2;
// }
// else{
//     result = num1 + num2;
// }

//ternary operator
result = num1 > num2 ? result = num1 * 2 : result = num1 + num2;
console.log(result);

// const age = 14;
// if(age >= 18){
//     console.log('You can Vote');

// }

// else{
//     console.log("you can't vote");
// }

// Ternary  3 parts

// ?  :
// Condition ? do something when true : do something when false

// age >= 18 ? console.log('vote dio') : console.log('gumay thko');

// if(isLeader === true){
//     price = 0;
// }
// else{
//     price += 100;
// }

// console.log(price);
// // 
// let price = 500;
// const isLeader = false;
// price = isLeader === true ? 0 : price + 100;
// console.log(price)


// semi advanced level ternary nested 

// let price = 1800;
// const isLeader = false;

// if(isLeader === true){
//     if(price >= 1000){
//         price /= 2;
//     }
//     else{
//         price = 0;
//     }
// }

// else{
//     price = price;
// }

// console.log(price);

// price = isLeader === true? 
//             price >= 1000? 
//                 price /= 2 : 0 
//                     : price = price;
//                     console.log(price);                    

                    