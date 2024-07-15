/**
 * for a given string tell me wherher it has even number of haracters or not
 * 
 */

function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }
}
// evenSizedString('Dhaka')
// evenSizedString('faka')
// const even = evenSizedString('Dhaka');
// console.log(even)

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }

}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}
// array  diea function call
// const size = numberOfElements([12,34,56,76,86]);
// console.log(size);


// object diea function call

const person = {
    name : 'Nahid',
    age: 24,
    Study: 'BSC',
    passion: 'Web Dev',

}
function getAge(person){
    const age = person.age;
    return age;
}
const myAge = getAge(24);