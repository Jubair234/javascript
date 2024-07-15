/**
 * create function taht will return only the even number 
 * return the sum of even numbers
 * 
 */
// function evenNumberOnly(numbers){
//     const evens = []
   
    
//     for(const number of numbers){
//         if(number % 2 === 0){
//             evens.push(number);
           
            
//         }
//     }
//     return evens;


// }

// const numbs = [23,45,65,76,87,88];
// const evens = evenNumberOnly(numbs);
// console.log('Even number are', evens)


function sumOfEvenNumbers(numbers){
    // console.log(numbers);
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
        
    }
    return sum;
    
}

const numbers = [12,34,54,66,77,88];
const evenSum = sumOfEvenNumbers(numbers);
console.log('Sum of Even number is ', evenSum);