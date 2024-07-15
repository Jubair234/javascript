// Count how many times a string has the letter a

const str = 'America is the land of evil';
let counter = 0;
const letter = 'a';

for(let i = 0; i<= str.length; i++){
    if(str[i] === letter){
        counter = counter + 1;
    }
    
}
console.log(counter);

