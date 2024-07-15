// condition based;
function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }

}
// const num = isEven(5);
// console.log(num);

function isOdd(number){
    if(number % 2 === 1){
        return true
    }
    return false;
}
console.log(isOdd(10))