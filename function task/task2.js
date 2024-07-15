// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOrOdd(num){
    console.log(num);
    if(num % 2 === 0){
        num = num / 2;
    }
    else{
        num = num * 2;
    }
    return num

}
const number = evenOrOdd(4);
console.log('number is ', number);

