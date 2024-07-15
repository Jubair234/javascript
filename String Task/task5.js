// Capitalize Every first Letter of each word in a String
let str = 'Capitalize Every first Letter of each word in a String';
// make the string in to an array with split
let splitStr = str.split(' ');
// emty array []
let arr = [];

// for loop the splitstr or array;

for(let word of splitStr){
    arr.push(word.charAt(0).toUpperCase() + word.slice(1))
}
console.log(arr.join(' '));
