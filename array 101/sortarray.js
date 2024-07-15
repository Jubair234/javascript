const persons = ['rakib', 'nokib', 'sakib', 'akib','dakib'];
const sortedPersons = persons.sort();
console.log(sortedPersons);

// const numbers = [5,6,7,8,0,1,3];


const numbers = [12, 5,6,7,8,0,1,3];
// const numbers_asc = numbers.sort(); not working
const numbers_asc = [...numbers].sort(function(a,b) {return a - b}); 
const numbers_dsc = [...numbers].sort(function(a,b) {return b - a}); 
console.log(numbers_asc);
console.log(numbers_dsc);