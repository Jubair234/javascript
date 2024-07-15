/**
 * objective: write a function to give me the sum of all number is an array
 * step 1: declar a function
 * step 2: call check whether the function is calledproperly
 * step 3: set a parameter(s)
 * step 4: pass the parameter(s), check whether parameter is passed in a proper format
 * step:5  complete the function task step by step
 * 
 */


function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;

    }
    return sum;
    
}
const numbs = [23,45,65,76,87];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is', sum)
