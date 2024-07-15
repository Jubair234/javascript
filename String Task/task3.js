// Check whether a string contains all the vowels a, e, i, o, u
const str = 'Education';
const vowels = ['a','e','i','o','u'];
const word = str.toLowerCase()
let Count = 0;
for(let i = 0; i <= word.length; i++){
    if(word.includes(vowels[i])){
        Count = Count + 1;
        
    }
    

}
console.log('Counting vowels in the string is', Count);


