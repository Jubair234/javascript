/**
 * looping techinique 
 * 1. for loop 
 * 2. while loop
 * 3. do while --> ignnore
 * 4. for of --> array loop korar jono
 * 5. for in --> object loop korar jono
 * 
 * 
 */

const friends = ['Elon', 'Bill', 'Mark','Waren'];

for(const friend of friends){
    // console.log(friend);
}
for(let i = 0; i< friends.length; i++){
    // console.log(i);
    // console.log(friends[i]);
}

let numbers = [34,35,37,78,86,45];
for(let i = 0; i< numbers.length; i++){
    // console.log(numbers[i]);
}

let i = 0;
while(i <friends.length){
    console.log(friends[i])
    i++;
}
let n = 0;
while(n < numbers.length){
    console.log(numbers[i]);
    n++;
}