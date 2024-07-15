// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function evenOrOdd(num){
    console.log(num);
    if(num % 2 === 0){
        return 'Even';
    }
    else{
       return 'Odd';
    }
    

}
const number = evenOrOdd(5);
console.log('number is ', number);