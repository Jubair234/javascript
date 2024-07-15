// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers){
    let sum = 0;
    
    for(number of numbers){
        sum = sum + number;
        
    }
    return sum;
    
}
const num = [2,4,6,7,8,9,21]
const average = make_avg(num) / num.length ;

console.log('The Avage of the number is', average);