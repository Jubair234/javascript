
const str = 'America is the land of evil';
let counter = 0;
const smletter = 'a';
const xlletter = 'A';

for(let i = 0; i<= str.length; i++){
    if(str[i] === smletter || str[i] === xlletter){
        counter = counter + 1;
    }
    
}
console.log(counter);